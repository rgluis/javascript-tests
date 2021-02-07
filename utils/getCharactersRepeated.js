exports.getCharactersRepeated = (str1, str2) => {
    /**
     * Filter the characters from the smallest 
     * array compared to the bigger array
     **/ 
    const getArrFiltered = (smallArr, bigArr) => smallArr.filter( character => bigArr.includes(character) );

    /**
     * Calculate the smaller string (length) to reduce 
     * the amount of loops in getArrFiltered function
     **/
    const arrFiltered = (str1.length < str2.length) 
        ? getArrFiltered(str1.split(''), str2.split('')) 
        : getArrFiltered(str2.split(''), str1.split(''));

    return console.log([...new Set(arrFiltered)]);
};
