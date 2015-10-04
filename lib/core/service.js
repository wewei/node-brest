import { defineStagingProperty } from '../util/meta';
import { resolve } from './type-registry';

class Service {
  constructor(options) {
    defineStagingProperty(this, 'rootType', options.rootType, resolve);
  }
}

export default Service;
