import {
  defineConstProperty,
  defineStagingProperty
} from '../util/meta';

import { resolve } from './type-registry';

class Property {
  constructor(options) {
    defineConstProperty(this, 'name', options.name);
    defineStagingProperty(this, 'type', options.type, resolve);
  }
}

export default Property;
