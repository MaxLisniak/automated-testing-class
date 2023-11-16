export function multiply(matrixA, matrixB) {
    if (matrixA[0].length !== matrixB.length) {
        // Matrices should have compatible dimensions for multiplication
        return null;
    }
    const result = [];
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const colsB = matrixB[0].length;
    for (let i = 0; i < rowsA; i++) {
        result[i] = [];
        for (let j = 0; j < colsB; j++) {
            result[i][j] = 0;
            for (let k = 0; k < colsA; k++) {
                result[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return result;
}
