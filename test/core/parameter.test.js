import chai from 'chai';
const should = chai.should();

import Parameter from '../../lib/core/parameter';
import Type from '../../lib/core/type';
import { reset } from '../../lib/core/type-registry';

describe('Parameter', function() {

  beforeEach(reset);
  afterEach(reset);

  it('should exist', function() {
    should.exist(Parameter);
  });

  it('should create parameters correctly', function() {
    const param = new Parameter({ name: 'param', type: 'NS.Foo' });
    should.exist(param);
    should.exist(param.name);
    param.name.should.equal('param');
    should.exist(param.type);
    param.type.should.equal('NS.Foo');

    const foo = new Type({
      namespace: 'NS',
      name: 'Foo'
    });
    param.type.should.equal(foo);
  });

  it('should make the name/type const', function() {
    const param = new Parameter({ name: 'param', type: 'NS.Foo' });
    should.throw(() => { param.name = 'prop2'; });
    should.throw(() => { param.type = 'NS.Foo2'; });

    new Type({ namespace: 'NS', name: 'Foo' });
    should.throw(() => { param.type = null; });
  });
});
