import chai from 'chai';
const should = chai.should();

import Property from '../../lib/core/property';
import Type from '../../lib/core/type';
import { reset } from '../../lib/core/type-registry';

describe('Property', function() {
  beforeEach(reset);
  afterEach(reset);

  it('should exist', function() {
    should.exist(Property);
  });

  it('should create properties correctly', function() {
    const prop = new Property({ name: 'prop', type: 'NS.Foo' });
    should.exist(prop);
    should.exist(prop.name);
    prop.name.should.equal('prop');
    should.exist(prop.type);
    prop.type.should.equal('NS.Foo');

    const foo = new Type({
      namespace: 'NS',
      name: 'Foo'
    });
    prop.type.should.equal(foo);
  });

  it('should make the name/type const', function() {
    const prop = new Property({ name: 'prop', type: 'NS.Foo' });
    should.throw(() => { prop.name = 'prop2'; });
    should.throw(() => { prop.type = 'NS.Foo2'; });

    new Type({ namespace: 'NS', name: 'Foo' });
    should.throw(() => { prop.type = null; });
  });
});
