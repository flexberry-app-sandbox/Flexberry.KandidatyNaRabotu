import {
  defineNamespace,
  defineProjections,
  Model as СотрудMixin
} from '../mixins/regenerated/models/i-i-s-kandidaty-na-rabotu-сотруд';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СотрудMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
