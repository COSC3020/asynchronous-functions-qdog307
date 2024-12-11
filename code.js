async function countMatches(array, key) {
    let count = 0; // initialize the count of matches

    for (let i = 0; i < array.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 0)); // asynchronous operation
        if (array[i] === key) {
            count++; // count if there's a match
        }
    }

    return count; // return the total count of matches
}