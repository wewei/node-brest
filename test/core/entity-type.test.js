import chai from 'chai';
const should = chai.should();

import EntityType from "../../lib/core/entity-type";
import { reset } from '../../lib/core/type-registry';

describe('EntityType', function() {
  
  beforeEach(reset);
  afterEach(reset);

  it('should exist', function() {
    should.exist(EntityType);
  });

  it('should create EntityType and resolve key correctly', function() {
    const foo = new EntityType({
      namespace: 'NS',
      name: 'Foo',
      key: 'id',
      properties: [
        { name: 'id', type: 'Edm.String' }
      ]
    });
    should.exist(foo);
    should.exist(foo.key);
    should.exist(foo.properties);
    foo.key.should.equal(foo.properties.id);
  });
});
