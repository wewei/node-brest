import chai from 'chai';
const should = chai.should();

import Type from '../../lib/core/type';
import CollectionType from '../../lib/core/collection-type';

import { reset } from '../../lib/core/type-registry';

describe('CollectionType', function() {

  beforeEach(reset);
  afterEach(reset);

  it('should exist', function() {
    should.exist(CollectionType);
  });

  it('should create the CollectionType correctly', function() {
    const collection = new CollectionType({
      namespace: 'NS',
      name: 'Foo@COL',
      elementType: 'NS.Foo'
    });
    should.exist(collection);
    should.exist(collection.elementType);
    collection.elementType.should.equal('NS.Foo');

    const foo = new Type({ namespace: 'NS', name: 'Foo' });
    collection.elementType.should.equal(foo);
  });
});
