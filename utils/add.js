exports.add = (x, y) => {
    const originalValues = {
        x,
        y
    };

    // Iterate until there is no carry
    while (y != 0) {

        /** 
         * carry will contain the bits (1) that 
         * are in common between x and y
         */
        let carry = x & y;

        /**
         * x will contain the sum of bits (1) 
         * of x and y where only one of the two
         * bits is set
         */
        x = x ^ y;

        /**
         * y will contain the value of carry pushed 
         * to left by zero (base 2)
         * for example 5 in base 2 is 0101, pushing
         * to left zero will result in 1010
         */
        y = carry << 1;
    }

    console.log(`The sum of ${originalValues.x} and ${originalValues.y} is ${x}`);
    return x;
};