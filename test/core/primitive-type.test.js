import chai from 'chai';
const should = chai.should();

import PrimitiveType from '../../lib/core/primitive-type';
import { reset } from '../../lib/core/type-registry';

describe('target to be tested ...', function() {

  beforeEach(reset);
  afterEach(reset);

  it('should exist', function() {
    should.exist(PrimitiveType);
  });

  it('should create PrimitiveType correctly', function() {
    const namespace = 'NS';
    const name = 'Foo';
    const foo = new PrimitiveType({ namespace, name });
    should.exist(foo);
  });
});
