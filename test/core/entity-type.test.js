import chai from 'chai';
const should = chai.should();

import EntityType from "../../lib/core/entity-type";

describe('EntityType', function() {
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
