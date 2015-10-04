import sinon from 'sinon';
import chai from 'chai';
const should = chai.should();

import {
  defineConstProperty,
  defineConstProperties,
  defineGeneratedProperty,
  defineGeneratedProperties,
  defineStagingProperty
} from '../../lib/util/meta';

describe('meta', function() {
  describe('defineConstProperty', function() {
    it('should exist', function() {
      should.exist(defineConstProperty);
    });

    it('should define the property as const', function () {
      let obj = {};
      defineConstProperty(obj, 'prop', 'foo').should.equal(obj);
      should.exist(obj.prop);
      obj.prop.should.equal('foo');
      should.throw(() => { obj.prop = 'bar'; });
    });
  });

  describe('defineGeneratedProperty', function() {
    it('should exist', function() {
      should.exist(defineGeneratedProperty);
    });

    it('should define the property with generator', function() {
      let obj = {};
      let generator = sinon.spy(function () {
        should.exist(this);
        this.should.equal(obj);
        return 'foo';
      });
      defineGeneratedProperty(obj, 'prop', generator).should.equal(obj);
      generator.called.should.be.false;
      should.exist(obj.prop);
      generator.calledOnce.should.be.true;
      obj.prop.should.equal('foo');
      generator.calledOnce.should.be.true;
      should.throw(() => { obj.prop = 'bar'; });
    });

    it('should generate on instance when defined on prototype', function () {
      class A {};
      let generator = sinon.spy(function () {
        should.exist(this);
        this.should.not.equal(A.prototype);
        return 'foo';
      });
      defineGeneratedProperty(A.prototype, 'prop', generator)
        .should.equal(A.prototype);
      const a1 = new A();
      const a2 = new A();
      generator.called.should.be.false;
      should.exist(a1.prop);
      a1.prop.should.equal('foo');
      generator.calledOnce.should.be.true;
      should.exist(a2.prop);
      a2.prop.should.equal('foo');
      generator.calledTwice.should.be.true;
    });
  });

  describe('defineConstProperties', function() {
    it('should exist', function() {
      should.exist(defineConstProperties);
    });

    it('should define properties as consts', function() {
      let obj = {};
      defineConstProperties(obj, {
        prop1: 'foo',
        prop2: 'bar'
      }).should.equal(obj);
      should.exist(obj.prop1);
      should.exist(obj.prop2);
      obj.prop1.should.equal('foo');
      obj.prop2.should.equal('bar');
      should.throw(() => { obj.prop1 = 'bar'; });
      should.throw(() => { obj.prop2 = 'foo'; });
    });
  });

  describe('defineGeneratedProperties', function() {
    it('should exist', function() {
      should.exist(defineGeneratedProperties);
    });

    it('should define properties with generators', function() {
      let obj = {};
      defineGeneratedProperties(obj, {
        prop1() { return 'foo'; },
        prop2() { return 'bar'; },
      }).should.equal(obj);
      should.exist(obj.prop1);
      should.exist(obj.prop2);
      obj.prop1.should.equal('foo');
      obj.prop2.should.equal('bar');
      should.throw(() => { obj.prop1 = 'bar'; });
      should.throw(() => { obj.prop2 = 'foo'; });
    });
  });

  describe('defineStagingProperty', function() {
    it('should exist', function() {
      should.exist(defineStagingProperty);
    });

    it('should define properties and resolve properties correctly', function() {
      let obj = {};
      let value;
      defineStagingProperty(obj, 'prop', 'foo', () => value).should.equal(obj);
      should.exist(obj.prop);
      obj.prop.should.equal('foo');
      value = 'bar';
      obj.prop.should.equal('bar');
      value = 'foo';
      obj.prop.should.equal('bar');
      should.throw(() => { obj.prop = 'bar'; });
    });
  });
});
