// tap-to-markdown.js
const fs = require('fs');
const Parser = require('tap-parser');

function tapToMarkdown(tapContent) {
  return new Promise((resolve, reject) => {
    const tests = [];
    let totalTests = 0;
    let passed = 0;
    let failed = 0;
    let skipped = 0;
    
    const parser = new Parser();
    
    // 监听每个断言
    parser.on('assert', (assert) => {
      totalTests++;
      if (assert.ok) {
        passed++;
      } else {
        failed++;
      }
      
      tests.push({
        name: assert.name || `Test ${totalTests}`,
        status: assert.ok ? 'passed' : 'failed',
        diag: assert.diag || null
      });
    });
    
    // 监听 comment（用于 skip 等）
    parser.on('comment', (comment) => {
      if (comment.includes('# SKIP') || comment.includes('skip')) {
        skipped++;
      }
    });
    
    // 监听完成事件
    parser.on('complete', () => {
      // 生成 Markdown 表格
      let markdown = '## Test Results\n\n';
      markdown += '| # | Test Name | Status | Details |\n';
      markdown += '|---|-----------|--------|---------|\n';
      
      tests.forEach((test, index) => {
        const status = test.status === 'passed' ? '✅ Passed' : '❌ Failed';
        let details = '';
        
        if (test.diag) {
          if (test.diag.message) {
            details = test.diag.message;
          } else if (test.diag.expected && test.diag.actual) {
            details = `Expected: ${test.diag.expected}, Got: ${test.diag.actual}`;
          } else if (test.diag.error) {
            details = test.diag.error;
          }
        }
        
        markdown += `| ${index + 1} | ${escapeMarkdown(test.name)} | ${status} | ${escapeMarkdown(details)} |\n`;
      });
      
      // 添加统计信息
      const passRate = totalTests > 0 ? ((passed / totalTests) * 100).toFixed(2) : 0;
      markdown += `\n## Summary\n\n`;
      markdown += `- **Total**: ${totalTests}\n`;
      markdown += `- **✅ Passed**: ${passed}\n`;
      markdown += `- **❌ Failed**: ${failed}\n`;
      markdown += `- **⏭️ Skipped**: ${skipped}\n`;
      markdown += `- **Pass Rate**: ${passRate}%\n`;
      
      resolve(markdown);
    });
    
    parser.on('error', (error) => {
      reject(error);
    });
    
    // 写入内容
    parser.write(tapContent);
    parser.end();
  });
}

function escapeMarkdown(text) {
  if (!text) return '';
  return text.replace(/[|\\]/g, '\\$&');
}

// 使用示例
const tapContent = fs.readFileSync(process.argv[2] || 'reports/ava.tap', 'utf8');
tapToMarkdown(tapContent)
  .then(markdown => {
    console.log(markdown);
  })
  .catch(error => {
    console.error('Error:', error);
    process.exit(1);
  });