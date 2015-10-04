import sinon from 'sinon';
import chai from 'chai';
const should = chai.should();

import Type from '../../lib/core/type';
import { reset } from '../../lib/core/type-registry';

describe('Type', function() {
  
  beforeEach(reset);
  afterEach(reset);

  it('should exist', function() {
    should.exist(Type);
  });

  it('should create instances with namespace and name', function() {
    let type = new Type({
      namespace: 'foo',
      name: 'bar'
    });
    should.exist(type.namespace);
    type.namespace.should.equal('foo');
    should.exist(type.name);
    type.name.should.equal('bar');
    should.exist(type.qname);
    type.qname.should.equal('foo.bar');
  });

});
