import chai from 'chai';
const should = chai.should();

import Member from '../../lib/core/member';

describe('Member', function() {
  it('should exist', function() {
    should.exist(Member);
  });

  it('should create enum members correctly', function() {
    const member = new Member({ name: 'Foo', value: 1 });
    should.exist(member);
    should.exist(member.name);
    member.name.should.equal('Foo');
    should.exist(member.value);
    member.value.should.equal(1);
  });

  it('should make the name/value const', function() {
    const member = new Member({ name: 'Foo', value: 1 });
    should.throw(() => { member.name = 'Bar'; });
    should.throw(() => { member.value = 2; });
  });
});
