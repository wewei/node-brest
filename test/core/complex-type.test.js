import chai from 'chai';
const should = chai.should();

import ComplexType from '../../lib/core/complex-type';

describe('ComplexType', function() {
  it('should exist', function() {
    should.exist(ComplexType);
  });

  it('should create object correctly', function() {
    const foo = new ComplexType({
      namespace: 'NS',
      name: 'Foo'
    });

    should.exist(foo);
    should.exist(foo.properties);
    foo.properties.should.deep.equal({});
  });
});
