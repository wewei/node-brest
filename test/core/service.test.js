import chai from 'chai';
const should = chai.should();

import Service from '../../lib/core/service';
import ComplexType from '../../lib/core/complex-type';
import { reset } from '../../lib/core/type-registry';

describe('Service', function() {

  beforeEach(reset);
  afterEach(reset);

  it('should exist', function() {
    should.exist(Service);
  });

  it('should define Service with correct root type', function() {
    const service = new Service({ rootType: 'NS.Foo' });
    should.exist(service);
    should.exist(service.rootType);
    service.rootType.should.equal('NS.Foo');
    const namespace = 'NS';
    const name = 'Foo';
    const properties = [];
    const foo = new ComplexType({ namespace, name, properties });
    service.rootType.should.equal(foo);
  });
});
