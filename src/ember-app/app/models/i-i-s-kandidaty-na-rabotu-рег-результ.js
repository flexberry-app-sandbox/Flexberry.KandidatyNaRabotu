import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as РегРезультMixin
} from '../mixins/regenerated/models/i-i-s-kandidaty-na-rabotu-рег-результ';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(РегРезультMixin, Validations, {
});

defineProjections(Model);

export default Model;
