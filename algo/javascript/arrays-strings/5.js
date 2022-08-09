/**
 * One Away
 * These are types of edits that can be performed on strings
 * 1. insert a character
 * 2. remove a character
 * 3. replace a character
 * Given two strings, write a function to check if they are one edit (or zero) away.
 */

function oneAway(str1, str2) {
    let set = new Set();

    for (let char of str1) {
        set.add(char);
    }

    for (let char of str2) {
        set.delete(char);
    }

    const diff = set.size;
    if (diff === 0 || diff === 1) {
        return true;
    }

    return false;
}


console.log(oneAway('pale', 'ple'));
console.log(oneAway('pales', 'pale'));
console.log(oneAway('pale', 'bale'));
console.log(oneAway('pale', 'bake'));
