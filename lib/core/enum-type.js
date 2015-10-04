import _ from 'lodash';
import Type from './type';
import Member from './member';

import {
  defineConstProperty,
  defineConstProperties
} from '../util/meta';

class EnumType extends Type {
  constructor(options) {
    super(options);
    defineConstProperties(this, { nameIndex: {}, valueIndex: {} });
    _.forEach(options.members, (m) => {
      const member = new Member(m);
      defineConstProperty(this.nameIndex, member.name, member);
      defineConstProperty(this.valueIndex, member.value, member);
    });
  }
}

export default EnumType;
