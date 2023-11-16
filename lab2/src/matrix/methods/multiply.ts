export function multiply(matrixA: number[][], matrixB: number[][]): number[][] | null {
  if (matrixA[0].length !== matrixB.length) {
    // Matrices should have compatible dimensions for multiplication
    return null;
  }

  const result: number[][] = [];
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

// // Example usage:
// const matrixA: number[][] = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// const matrixB: number[][] = [
//   [7, 8],
//   [9, 10],
//   [11, 12],
// ];

// const resultMatrix = multiply(matrixA, matrixB);

// if (resultMatrix !== null) {
//   console.log("Resultant Matrix after multiplication:");
//   for (const row of resultMatrix) {
//     console.log(row.join("\t"));
//   }
// } else {
//   console.log("Matrices have incompatible dimensions, cannot multiply.");
// }
