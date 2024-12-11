
const  countMatches  = require('./code');

(async () => {
    const assert = require('assert');

    // Test case 1: Empty array
    const test1 = await countMatches([], 1);
    assert.strictEqual(test1, 0, 'Test case 1 failed');

    // Test case 2: Array with no matches
    const test2 = await countMatches([2, 3, 4], 1);
    assert.strictEqual(test2, 0, 'Test case 2 failed');

    // Test case 3: Array with some matches
    const test3 = await countMatches([1, 2, 3, 1, 4], 1);
    assert.strictEqual(test3, 2, 'Test case 3 failed');

    // Test case 4: Array with all matches
    const test4 = await countMatches([1, 1, 1], 1);
    assert.strictEqual(test4, 3, 'Test case 4 failed');

    // Test case 5: Large array
    const largeArray = Array(10000).fill(1);
    largeArray[9999] = 2; // One element is not the key
    const test5 = await countMatches(largeArray, 1);
    assert.strictEqual(test5, 9999, 'Test case 5 failed');

    console.log("All test cases passed!");
})();
