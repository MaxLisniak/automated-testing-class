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
// // Example usage:
// const matrix1: number[][] = [
//   [1, 2],
//   [3, 4],
// ];
// const matrix2: number[][] = [
//   [5, 6],
//   [7, 8],
// ];
// const resultMatrix = add(matrix1, matrix2);
// if (resultMatrix !== null) {
//   console.log("Resultant Matrix after addition:");
//   for (const row of resultMatrix) {
//     console.log(row.join("\t"));
//   }
// } else {
//   console.log("Matrices have different dimensions, cannot add them.");
// }
