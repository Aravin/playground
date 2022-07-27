/** Check Permutation: Given two strings,
 * write a method to decide if one is a permutation of the other
 */

function checkPermutation(str1, str2) {

    const set = new Set();

    if (str1.length !== str2.length) {
        return false;
    }

    for (let i = 0; i < str1.length; i++) {
        const index = str2.indexOf(str1[i]);

        if (index === -1 || set.has(index)) {
            return false;
        } else {
            set.add(index);
        }
    }

    return true;
}

console.log(checkPermutation('one', 'neo'));
console.log(checkPermutation('abc', 'xyz'));
console.log(checkPermutation('zeroo', 'heroz'));

/** Sample Output
 * true
 * false
 * false
 */
