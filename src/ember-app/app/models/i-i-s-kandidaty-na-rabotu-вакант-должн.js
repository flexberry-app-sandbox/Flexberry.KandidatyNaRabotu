import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ВакантДолжнMixin
} from '../mixins/regenerated/models/i-i-s-kandidaty-na-rabotu-вакант-должн';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ВакантДолжнMixin, Validations, {
});

defineProjections(Model);

export default Model;
