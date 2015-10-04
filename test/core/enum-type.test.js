import _ from 'lodash';
import chai from 'chai';
const should = chai.should();

import EnumType from '../../lib/core/enum-type';
import { reset } from '../../lib/core/type-registry';

describe('EnumType', function() {

  beforeEach(reset);
  afterEach(reset);

  it('should exist', function() {
    should.exist(EnumType);
  });

  it('should create EnumType correctly', function() {
    const namespace = 'NS';
    const name = 'Foo';
    const members = [
      { name: 'Tic', value: 0 },
      { name: 'Tac', value: 1 },
      { name: 'Toe', value: 2 }
    ];
    const foo = new EnumType({ namespace, name, members });
    should.exist(foo);
    should.exist(foo.nameIndex);
    _.forEach(members, (member) => {
      should.exist(foo.nameIndex[member.name]);
      should.exist(foo.valueIndex[member.value]);
      foo.nameIndex[member.name].should.equal(foo.valueIndex[member.value]);
      foo.nameIndex[member.name].name.should.equal(member.name);
      foo.nameIndex[member.name].value.should.equal(member.value);
    });
  });
});
