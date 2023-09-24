import chai from 'chai'
import Mtrx from 'mtrx';
import { describe, it } from 'mocha';
const expect = chai.expect


describe('Matrix Multiplication', () => {
  it('should multiply two matrices correctly', () => {
    const m1 = new Mtrx([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ])
    const m2 = new Mtrx([
      [10, 11, 12],
      [13, 14, 15],
      [16, 17, 18]
    ])
    const expectedResult = [
      [84, 90, 96],
      [201, 216, 231],
      [318, 342, 366]
    ]
    const result = Mtrx.mul(m1, m2)
    expect(result).to.deep.equal(expectedResult)
  })
})