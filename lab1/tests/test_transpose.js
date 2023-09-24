import chai from 'chai'
import Mtrx from 'mtrx';
import { describe, it } from 'mocha';
const expect = chai.expect


describe('Transposed Matrix', () => {
  it('should transpose matrix correctly', () => {
    const m = new Mtrx([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ])
    const expectedResult = [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9]
    ]
    const result = m.T()
    expect(result).to.deep.equal(expectedResult)
  })
})