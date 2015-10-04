import _ from 'lodash';

let register = {};

export default {
  register(type) {
    _.set(register, type.qname, type);
    return type;
  },

  resolve(qname) {
    return _.get(register, qname);
  },

  reset() { register = {}; }
};
