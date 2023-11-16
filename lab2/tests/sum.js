import { assert } from 'chai';
import { Matrix } from '../dist/matrix/index.js'

describe('Matrix sum', () => {
  it('add up matrices', () => {
    const matrix1 = [
      [1, 2],
      [3, 4],
    ];

    const matrix2 = [
      [5, 6],
      [7, 8],
    ];

    const resultMatrix = Matrix.add(matrix1, matrix2);
    assert.deepEqual(resultMatrix, [
      [6, 8],
      [10, 12]
    ])
  })

  it("can't be different sizes", () => {
    const matrix1 = [
      [1, 2],
      [3, 4],
    ];

    const matrix2 = [
      [5, 6, 7],
      [8, 9, 10],
    ];

    const resultMatrix = Matrix.add(matrix1, matrix2);
    assert.deepEqual(resultMatrix, null)
  })
})

