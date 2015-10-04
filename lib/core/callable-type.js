import _ from 'lodash';

import Type from './type';
import Parameter from './parameter';

import { resolve } from './type-registry';

import {
  defineStagingProperty,
  defineConstProperty
} from '../util/meta';

class CallableType extends Type {
  constructor(options) {
    super(options);
    defineStagingProperty(this, 'returnType', options.returnType, resolve);
    defineConstProperty(this, 'parameters', {});
    _.forEach(options.parameters, (p) => {
      defineConstProperty(this.parameters, p.name, new Parameter(p));
    });
  }
}

export default CallableType;
