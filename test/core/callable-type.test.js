import chai from 'chai';
const should = chai.should();
import CallableType from '../../lib/core/callable-type';
import { reset } from '../../lib/core/type-registry';

describe('CallableType', function() {

  beforeEach(reset);
  afterEach(reset);

  it('should exist', function() {
    should.exist(CallableType);
  });

  it('should create the type and resolve parameters correctly', function() {
    const bar = new CallableType({
      namespace: 'NS',
      name: 'Bar',
      returnType: 'NS.Foo',
      parameters: [
        { name: 'foo', type: 'NS.Foo' }
      ]
    });
    should.exist(bar);
    should.exist(bar.returnType);
    bar.returnType.should.equal('NS.Foo');
    should.exist(bar.parameters);
    should.exist(bar.parameters.foo);
    bar.parameters.foo.type.should.equal('NS.Foo');

    const foo = new CallableType({
      namespace: 'NS',
      name: 'Foo',
    });
    should.exist(foo);
    bar.returnType.should.equal(foo);
    bar.parameters.foo.type.should.equal(foo);
  });

  it('should make the returnType/parameters const', function() {
    const bar = new CallableType({
      namespace: 'NS',
      name: 'Bar',
      returnType: 'NS.Foo',
      parameters: [
        { name: 'foo', type: 'NS.Foo' }
      ]
    });

    should.throw(() => { bar.returnType = 'NS.Foo2'; });
    should.throw(() => { bar.parameters = {}; });
    should.throw(() => { bar.parameters.foo = null; });

    const foo = new CallableType({
      namespace: 'NS',
      name: 'Foo',
    });

    should.throw(() => { bar.returnType = foo; });
    should.throw(() => { bar.parameters.foo = foo; });
  });
});
