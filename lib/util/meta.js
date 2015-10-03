import _ from 'lodash';

export function defineConstProperties(obj, properties) {
  _.forEach(properties, (v, k) => defineConstProperty(obj, k, v));
  return obj;
}

export function defineConstProperty(obj, name, value) {
  return Object.defineProperty(obj, name, {
    value,
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
      let value = generator.call(this);
      Object.defineProperty(this, name, { value });
      return value;
    }
  });
}
