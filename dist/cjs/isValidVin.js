'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * @module utils/isValidVin
 * @category Utils
 */
/*
 * There will need to be some way to translate vin digits that are alphabetic
 * into their number value in the VIN algorithm transliteration table.
 * Later, during the creation of the checksum variable, those digits will be
 * multiplied against their corresponding weight (by index) in the WEIGHTS_ARRAY.
 * This transliteration table is a key part of the VIN validation algorithm.
 */
const TRANSLITERATION_TABLE = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    J: 1,
    K: 2,
    L: 3,
    M: 4,
    N: 5,
    P: 7,
    R: 9,
    S: 2,
    T: 3,
    U: 4,
    V: 5,
    W: 6,
    X: 7,
    Y: 8,
    Z: 9,
};
/*
 * Later, during the creation of the 'checksum' variable, these weights will be
 * multiplied by the value of their mirrored index vin digits.
 * The array index of each weight corresponds to the same index of each
 * digit in the 'vin'.
 */
const WEIGHTS_ARRAY = [
    8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2,
];
/**
 * Provides **offline** validation of Vehicle Identification Numbers (VINs) using the
 * [VIN Check Algorithm](https://en.wikibooks.org/wiki/Vehicle_Identification_Numbers_(VIN_codes)/Check_digit).
 *
 * @param {string} vin - Vehicle Identification Number.
 * @returns {boolean} True for a valid VIN, false for an invalid VIN.
 *
 * @example <caption>When loaded from the browser via html script tags</caption>
 * // <script type="text/javascript" src="https://www.npmjs.com/package/@shaggytools/nhtsa-api-wrapper"></script>
 * const isValid = NHTSA.isValidVin('3VWD07AJ5EM388202')
 * console.log(isValid) // true
 *
 * @example <caption>When loaded as a module</caption>
 * import { isValidVin } from '@shaggytools/nhtsa-api-wrapper'
 * const isValid = isValidVin('3VWD07AJ5EM388202')
 * console.log(isValid) // true
 *
 */
function isValidVin(vin) {
    /* A valid VIN must be a string and is always exactly 17 digits */
    if (typeof vin !== 'string' || vin.length != 17) {
        return false;
    }
    /* Normalize the vin to all uppercase letters */
    vin = vin.toUpperCase();
    /* split the vin digits into an array */
    const vinArray = vin.split('');
    /* checkDigit will be tested against the checkSum later */
    const checkDigit = vinArray[8];
    /*
     * In a valid VIN, the checkDigit can either be:
     * a number, 0-9 inclusive OR the character 'X'
     */
    if (isNaN(parseInt(checkDigit)) && checkDigit !== 'X') {
        return false;
    }
    /*
     * The checkValue must be a digit and 'X' is the only valid alphabetic check value.
     * As per the algorithm, a checkDigit of 'X' is equal to a checkValue of `10` and needs
     * to be converted as such.
     */
    const checkValue = checkDigit === 'X' ? 10 : parseInt(checkDigit);
    /*
     * Maps the vinArray and converts any values (digits) that are alphabetic,
     * into numbers, using the TRANSLITERATION_TABLE.
     * Then these numbers are multiplied against their corresponding weight
     * in the WEIGHTS_ARRAY, matched by index position.
     * All 17 of those digitValues are then added together and divided by 11.
     * The remainder, or % modulo, of that division will be the final 'checksum'.
     */
    const checksum = vinArray
        .map((digit, index) => {
        let digitValue;
        /* Use the transliteration table to convert any Not a Number(NaN) values to numbers */
        isNaN(parseInt(digit))
            ? (digitValue = TRANSLITERATION_TABLE[digit])
            : (digitValue = parseInt(digit));
        /* Convert the digitValue to a weighted number corresponding to it's position, by index, in the weightsArray. */
        const weight = WEIGHTS_ARRAY[index];
        /* The final step for each digit is to multiply the digit by it's corresponding weight */
        return digitValue * weight;
    })
        /* Finally, get the sum of all digits and divide by 11, the remainder of that operation is the checksum */
        .reduce((acc, currValue) => acc + currValue, 0) % 11;
    /*
     * The checksum is compared against the checkValue we set earlier (the 9th digit of the VIN)
     * As per the algorithm, if they are equal to each other, then the VIN must be valid and
     * we return true, otherwise the VIN is invalid and we return false.
     */
    return checksum === checkValue;
}

exports.isValidVin = isValidVin;
//# sourceMappingURL=isValidVin.js.map
