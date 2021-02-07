exports.findZeroNumberInThisMatrix = matrix => {
    // Initialize variables to save the row and column where we found the zero
    let rowWithZero = null,
        columnWithZero = null;
    
    // newMatrix will contain the matrix to be printed in the console.
    let newMatrix = [];

    // Iterate through the rows of the matrix 
    for (let row = 0; row < matrix.length; row++) {

        // Iterate through the columns of the row from the previous for loop
        for (let column = 0; column < matrix[row].length; column++) {

            // If zero value is found then we save the current row and column into our variables and stop the loop of coluns
            if (matrix[row][column] === 0) {
                rowWithZero = row;
                columnWithZero = column;
                break;
            }
        }

        // If rowWithZero has a value that means we already found the zero value, so we stop the loop of rows
        if (rowWithZero) break;
    }

    console.log('[');
    for (let row = 0; row < matrix.length; row++) {
        // Create the array for the current row into our newMatrix
        newMatrix[row] = [];
        for (let column = 0; column < matrix[row].length; column++) {

            // If the current row is equals to rowWithZero (the one that we found the zero value), then we set the column with 0;
            if (rowWithZero === row) {
                newMatrix[row][column] = 0;
            } else {

                // If the current column is equals to columnWithZero (the one that we found the zero value), then we set the column with 0
                if (columnWithZero === column) {
                    newMatrix[row][column] = 0;
                } else {
                    // If the previous condition is not valid then we set the column of our newMatrix with the value of the current column and row
                    newMatrix[row][column] = (matrix[row][column]);
                }
            }
        }

        // Print in console the row with values, if the row is the last one of the array we do not print the comma
        console.log(`    ${JSON.stringify(newMatrix[row]).split(',').join(', ')}${row === matrix.length - 1 ? '' : ','}`);
    }
    console.log(']');
};