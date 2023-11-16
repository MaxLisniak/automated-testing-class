import { assert } from 'chai';
import { Matrix } from '../dist/matrix/index.js'

describe('Matrix multiplication', () => {
  it('multiply matrices', () => {
    const matrix1 = [
      [1, 2],
      [3, 4],
    ];

    const matrix2 = [
      [5, 6],
      [7, 8],
    ];

    const resultMatrix = Matrix.multiply(matrix1, matrix2);
    assert.deepEqual(resultMatrix, [
      [19, 22],
      [43, 50]
    ])
  })

  it("can't be different sizes", () => {
    const matrix1 = [
      [1, 2],
      [3, 4],
    ];

    const matrix2 = [
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];

    const resultMatrix = Matrix.multiply(matrix1, matrix2);
    assert.deepEqual(resultMatrix, null)
  })
})

