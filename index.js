const {
    utils: { 
        add,
        getCharactersRepeated,
        convertStringToBaseX,
        findZeroNumberInThisMatrix,
        getRomanNumeral,
        permutationsOf,
    },
} = require('./utils/index');

/**
 * 1. Write a function that adds two numbers without 
 * using any arithmetic operators
 */
add(15, 30);

/**
 * 2. Given 2 strings of unknown characters (but it cannot be repeated)
 *  create a function that returns an array of the characters 
 * that are repeated in both strings in the most efficient way
 */
getCharactersRepeated('asdfaa', 'aqwrda');

/**
 * 3. Write a function that takes a string containing 
 * a number in base X along with an integer of the base X. 
 * The function must return the integer value of that string/base pair
 */
convertStringToBaseX('254', 2);

/**
 * 4. Write a function such that if an element in an MxN matrix is 0 , 
 * its entire row and column are set to 0 and then printed out
 * 
 * Example
 * // Original input
    [
        [1, 2, 3],
        [4, 0, 6],
        [7, 8, 9]
    ]
    // Result
    [
        [1, 0, 3],
        [0, 0, 0],
        [7, 0, 9]
    ]
 */
findZeroNumberInThisMatrix([
    [1, 2, 3],
    [4, 0, 6],
    [7, 8, 9]
]);

/**
 * 5. Write a function that convert the given number into a Roman Numeral - The function needs to receive a 
 * Number and Return a String (The Number can be between 1 and 3999)
 * 
 * Example:
 *     getRomanNumeral(512);
 * Prints: DXII
 */
getRomanNumeral(512);

/**
 * 6. Write a function to print all permutations of a string. Max string length can be 50 characters.
 */

 // This is not finished
permutationsOf('abc');