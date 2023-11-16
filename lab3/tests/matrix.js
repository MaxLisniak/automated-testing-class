const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const expect = chai.expect;
const matrix = require('../src/gauss_js-main/matrix.js')

describe('matrix', function () {
  let Matrix;
  let matrixInstance;

  beforeEach(function () {
    Matrix = sinon.spy(matrix);
    sinon.stub(matrix.prototype, 'get_matrix').returns(Array(3).fill().map(() => Array(4).fill(0)));
    matrixInstance = new Matrix(3);

    sinon.stub(matrixInstance, 'printm');
    sinon.stub(matrixInstance, 'get_rows').returns(3);
    sinon.stub(matrixInstance, 'get_cols').returns(4);
    sinon.stub(matrixInstance, 'mull_add');
    sinon.stub(matrixInstance, 'exists_wrong_row').returns(false);
    sinon.stub(matrixInstance, 'exists_zero_row').returns(false);
    sinon.stub(matrixInstance, 'swap_with_nonzero_row');
    sinon.stub(matrixInstance, 'get').returns(0);
    sinon.stub(matrixInstance, 'set');
  });

  afterEach(function () {
    matrix.prototype.get_matrix.restore();
    matrixInstance.printm.restore();
    matrixInstance.get_rows.restore();
    matrixInstance.get_cols.restore();
    matrixInstance.mull_add.restore();
    matrixInstance.exists_wrong_row.restore();
    matrixInstance.exists_zero_row.restore();
    matrixInstance.swap_with_nonzero_row.restore();
    matrixInstance.get.restore();
    matrixInstance.set.restore();
  });


  it('should call the constructor', function () {
    expect(Matrix).to.have.been.calledOnce;
  });

  it('should call get_matrix with correct arguments', function () {
    expect(matrixInstance.get_matrix).to.have.been.calledWith(3);
  });

  it('should call get_rows and return correct value', function () {
    expect(matrixInstance.get_rows()).to.equal(3);
  });

  it('should call get_cols and return correct value', function () {
    expect(matrixInstance.get_cols()).to.equal(4);
  });

  it('should call exists_wrong_row and return correct value', function () {
    expect(matrixInstance.exists_wrong_row()).to.be.false;
  });

  it('should call exists_zero_row and return correct value', function () {
    expect(matrixInstance.exists_zero_row()).to.be.false;
  });

});
