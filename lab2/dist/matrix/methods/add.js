export function add(matrixA, matrixB) {
    if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
        // Matrices should have the same dimensions for addition
        return null;
    }
    const result = [];
    for (let i = 0; i < matrixA.length; i++) {
        const row = [];
        for (let j = 0; j < matrixA[i].length; j++) {
            row.push(matrixA[i][j] + matrixB[i][j]);
        }
        result.push(row);
    }
    return result;
}
