import _ from 'lodash';
import Type from './type';
import Property from './property';
import { resolve } from './type-registry';

import {
  defineConstProperty,
  defineStagingProperty
} from '../util/meta';

class ObjectType extends Type {
  constructor(options) {
    super(options);

    options.baseType && defineStagingProperty(
      this,
      'baseType',
      options.baseType,
      resolve
    );

    defineConstProperty(this, 'properties', {});
    _.forEach(options.properties, (p) => {
      defineConstProperty(this.properties, p.name, new Property(p));
    });
  }
}

export default ObjectType;
