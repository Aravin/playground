/**
 * Write a method to replace all spaces in a string with %20.
 * You may assume that the string has sufficient space at the end
 * to hold the additional chars, and that you are given the
 * true length of the string
 */

function replaceSpaces(str, strLength) {
    // short-hand solution
    //return str.trim().replace(RegExp(/\s/g), '%20');

    let result = '';

    for (let i = 0; i < strLength; i++) {
        if (str[i] === ' ') {
            result = result + '%20';
        } else {
            result = result + str[i];
        }
    }

    return result;
}

console.log(replaceSpaces('Mr John Smith       ', 13));
console.log(replaceSpaces('name=Aravind Appadurai&age=16', 29));


/**
 * Mr%20John%20Smith
 */