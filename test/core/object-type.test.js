import chai from 'chai';
const should = chai.should();
import ObjectType from '../../lib/core/object-type';
import { reset } from '../../lib/core/type-registry';

describe('ObjectType', function() {
  it('should exist', function() {
    should.exist(ObjectType);
  });

  beforeEach(reset);
  afterEach(reset);

  it('should create the type resolve properties correctly', function() {
    const bar = new ObjectType({
      namespace: 'NS',
      name: 'Bar',
      baseType: 'NS.Foo',
      properties: [
        { name: 'foo', type: 'NS.Foo' },
        { name: 'bar', type: 'NS.Bar' }
      ]
    });
    should.exist(bar);
    should.exist(bar.baseType);
    bar.baseType.should.equal('NS.Foo');
    should.exist(bar.properties.foo);
    bar.properties.foo.type.should.equal('NS.Foo');
    should.exist(bar.properties.bar);
    bar.properties.bar.type.should.equal(bar);

    const foo = new ObjectType({
      namespace: 'NS',
      name: 'Foo',
    });
    should.exist(foo);
    bar.baseType.should.equal(foo);
    bar.properties.foo.type.should.equal(foo);
  });

  it('should make the baseType/properties const', function() {
    const bar = new ObjectType({
      namespace: 'NS',
      name: 'Bar',
      baseType: 'NS.Foo',
      properties: [
        { name: 'foo', type: 'NS.Foo' },
        { name: 'bar', type: 'NS.Bar' }
      ]
    });

    should.throw(() => { bar.baseType = 'NS.Foo2'; });
    should.throw(() => { bar.properties = {}; });
    should.throw(() => { bar.properties.foo = null; });

    const foo = new ObjectType({
      namespace: 'NS',
      name: 'Foo',
    });

    should.throw(() => { bar.baseType = foo; });
    should.throw(() => { bar.properties.foo = foo; });
  });
});
