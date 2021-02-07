exports.convertStringToBaseX = (num, base) => {
    if (base < 2 || base > 36) throw 'The base given is not valid, please input a base between 2 and 36';
    /** 
     * Convert the string number into a number type with +num  
     * and return the value in the base given
     **/
    return console.log((+num).toString(base));
};