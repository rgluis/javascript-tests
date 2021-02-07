exports.getRomanNumeral = num => {
    // This function only accepts numbers between 1 and 3999 as per requirements
    if (num < 1 || num > 3999) throw 'The number given is not valid please enter a number between 1 and 3999';
    
    // Collection of all the Roman Numerals
    const definitions = {
        M:1000,
        CM:900,
        D:500,
        CD:400,
        C:100,
        XC:90,
        L:50,
        XL:40,
        X:10,
        IX:9,
        V:5,
        IV:4,
        I:1,
    };

    // Initialize the variable where we'll save the output
    let romanNumber = '';
    
    // Iterate through definitions object
    for ( let key in definitions ) {
        
        // While the number (num) given from user is greater than or equals to the current definition value (ie: 1000)
        while ( num >= definitions[key] ) {

            // Assign the key of the definition that the number is greater than to our romanNumber variable
            romanNumber += key;

            // Decrease number given from user by the value of our current key of the definitions object
            num -= definitions[key];
        }
    }

    // Print the romanNumber calculated
    return console.log(romanNumber);
};