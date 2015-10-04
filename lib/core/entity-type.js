import ObjectType from './object-type';

import { defineConstProperties } from '../util/meta';

class EntityType extends ObjectType {
  constructor(options) {
    super(options);
    (options.key) && defineConstProperties(this, {
      key: this.properties[options.key]
    });
  }
}

export default EntityType;
