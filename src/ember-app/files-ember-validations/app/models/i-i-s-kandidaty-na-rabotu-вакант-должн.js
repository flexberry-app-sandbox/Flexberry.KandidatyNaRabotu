import {
  defineNamespace,
  defineProjections,
  Model as ВакантДолжнMixin
} from '../mixins/regenerated/models/i-i-s-kandidaty-na-rabotu-вакант-должн';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ВакантДолжнMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
