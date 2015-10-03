import _ from 'lodash';

import {
  defineConstProperties,
  defineGeneratedProperties
} from '../util/meta';

class Type {
  constructor(options) {
    defineConstProperties(this, _.pick(options, [ 'name', 'namespace' ]));
  }
}

defineGeneratedProperties(Type.prototype, {
  qname() { return `${this.namespace}.${this.name}`; }
});

export default Type;
