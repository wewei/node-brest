import _ from 'lodash';

export function defineConstProperties(obj, properties) {
  _.forEach(properties, (v, k) => defineConstProperty(obj, k, v));
  return obj;
}

export function defineConstProperty(obj, name, value) {
  return Object.defineProperty(obj, name, {
    value,
    enumerable: true,
    configurable: false,
    writable: false
  });
}

export function defineGeneratedProperties(obj, properties) {
  _.forEach(properties, (v, k) => defineGeneratedProperty(obj, k, v));
  return obj;
}

export function defineGeneratedProperty(obj, name, generator) {
  return Object.defineProperty(obj, name, {
    configurable: true,
    get() {
      const value = generator.call(this);
      defineConstProperty(this, name, value);
      return value;
    }
  });
}

export function defineStagingProperty(obj, name, value, resolver) {
  return Object.defineProperty(obj, name, {
    configurable: true,
    get() {
      const v = resolver.call(this, value);
      if (_.isUndefined(v)) {
        return value;
      } else {
        defineConstProperty(obj, name, v);
        return v;
      }
    }
  });
}
