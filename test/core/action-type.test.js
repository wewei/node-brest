import chai from 'chai';
const should = chai.should();

import ActionType from '../../lib/core/action-type';
import { reset } from '../../lib/core/type-registry';

describe('ActionType', function() {

  beforeEach(reset);
  afterEach(reset);

  it('should exist', function() {
    should.exist(ActionType);
  });

  it('should create ActionType correctly', function() {
    const foo = new ActionType({
      namespace: 'NS',
      name: 'Foo'
    });

    should.exist(foo);
    should.exist(foo.parameters);
    foo.parameters.should.deep.equal({});
  });
});
