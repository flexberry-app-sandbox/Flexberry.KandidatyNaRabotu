import {
  defineNamespace,
  defineProjections,
  Model as РегистАнкетыMixin
} from '../mixins/regenerated/models/i-i-s-kandidaty-na-rabotu-регист-анкеты';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РегистАнкетыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
