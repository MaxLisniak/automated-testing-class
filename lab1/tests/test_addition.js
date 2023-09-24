import chai from 'chai'
import Mtrx from 'mtrx';
import { describe, it } from 'mocha';
const expect = chai.expect


describe('Matrix Addition', () => {
  it('should add up two matrices correctly', () => {
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
      [11, 13, 15],
      [17, 19, 21],
      [23, 25, 27]
    ]
    const result = Mtrx.add(m1, m2)
    expect(result).to.deep.equal(expectedResult)
  })
})