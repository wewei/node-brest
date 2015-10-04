import _ from 'lodash';
import { defineConstProperties } from '../util/meta';

class Member {
  constructor(options) {
    defineConstProperties(this, _.pick(options, [ 'name', 'value' ]));
  }
}

export default Member;
