## Test Results

| Asserts | Passes | Failures |
|---------|--------|----------|
| 84 | 84 | 0 |

**Pass Rate:** 100.00%

*Generated at: 26/3/2026, 2:55:53 pm*

<details>
<summary><b>📋 All Test Details</b> (84 items, showing first 50)</summary>

| # | Status | Test Name |
|---|--------|-----------|
| 1 | ✅ | PathTreeNodeKind — has correct string values |
| 2 | ✅ | constructor — throws when base is omitted |
| 3 | ✅ | constructor — throws when base is an empty string |
| 4 | ✅ | constructor — throws when base does not exist |
| 5 | ✅ | constructor — throws when base points to a file |
| 6 | ✅ | constructor — succeeds with a valid directory |
| 7 | ✅ | constructor — throws when filter is a string |
| 8 | ✅ | constructor — throws when filter is a number |
| 9 | ✅ | constructor — throws when filter is null |
| 10 | ✅ | constructor — accepts zero-parameter filter |
| 11 | ✅ | constructor — accepts one-parameter filter |
| 12 | ✅ | constructor — accepts filter that always returns false |
| 13 | ✅ | constructor — accepts fileVisible: true |
| 14 | ✅ | constructor — accepts fileVisible: false |
| 15 | ✅ | constructor — accepts usePathCache: true |
| 16 | ✅ | constructor — accepts usePathCache: false |
| 17 | ✅ | build() — root parent is null |
| 18 | ✅ | build() — root value is empty string |
| 19 | ✅ | build() — root type is Unknown |
| 20 | ✅ | build() — root children is an array |
| 21 | ✅ | build() — root depth is 0 |
| 22 | ✅ | build() — top-level children have depth 1 |
| 23 | ✅ | build() — grandchildren have depth 2 |
| 24 | ✅ | build() — depth increments correctly through 3 levels |
| 25 | ✅ | buildBy([]) — top-level nodes have depth 1 |
| 26 | ✅ | fileVisible: true — file nodes have correct depth |
| 27 | ✅ | build() — top-level files are excluded by default |
| 28 | ✅ | build() — top-level directories are all present |
| 29 | ✅ | build() — all top-level dir nodes have type Dir |
| 30 | ✅ | build() — nested children are built recursively |
| 31 | ✅ | build() — each node has a correct parent back-reference |
| 32 | ✅ | fileVisible: true — files appear at top level |
| 33 | ✅ | fileVisible: true — file nodes have type File |
| 34 | ✅ | fileVisible: true — file nodes have no children |
| 35 | ✅ | fileVisible: true — directory nodes still have type Dir |
| 36 | ✅ | fileVisible: true — dir nodes still recurse correctly |
| 37 | ✅ | fileVisible: false (explicit) — files remain excluded |
| 38 | ✅ | fileVisible: true — mixed dir/file siblings both typed correctly |
| 39 | ✅ | build() — filter excludes at top level |
| 40 | ✅ | build() — filter is applied recursively |
| 41 | ✅ | build() — filter receives correct name and dirPath params |
| 42 | ✅ | build() — filter combined with fileVisible: true filters files too |
| 43 | ✅ | buildBy([]) — returns only requested top-level dirs |
| 44 | ✅ | buildBy([]) — builds full subtrees under requested dirs |
| 45 | ✅ | buildBy([]) — top-level nodes have type Dir |
| 46 | ✅ | buildBy([]) — parent references are correct |
| 47 | ✅ | buildBy([]) — strips leading/trailing posix slashes |
| 48 | ✅ | buildBy([]) — entries that reduce to empty string are silently dropped |
| 49 | ✅ | buildBy([]) — empty array produces root with no children |
| 50 | ✅ | buildBy([]) — throws when segment does not exist |
| ... | ... | ... |
| *34 more items* | *truncated* | *use --max-rows to increase* |

</details>

---

### ✅ All tests passed!

This PR is ready for review and merge. 🚀

