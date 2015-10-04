import _ from 'lodash';
import Type from './type';

import { defineStagingProperty } from '../util/meta';
import { resolve } from './type-registry';

class CollectionType extends Type {
  constructor(options) {
    super(options);
    defineStagingProperty(this, 'elementType', options.elementType, resolve);
  }
}

export default CollectionType;
