import chai from 'chai';
const should = chai.should();

import FunctionType from '../../lib/core/function-type';
import { reset } from '../../lib/core/type-registry';

describe('FunctionType', function() {

  beforeEach(reset);
  afterEach(reset);

  it('should exist', function() {
    should.exist(FunctionType);
  });

  it('should create FunctionType correctly', function() {
    const foo = new FunctionType({
      namespace: 'NS',
      name: 'Foo'
    });

    should.exist(foo);
    should.exist(foo.parameters);
    foo.parameters.should.deep.equal({});
  });
});
