import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СотрудMixin
} from '../mixins/regenerated/models/i-i-s-kandidaty-na-rabotu-сотруд';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СотрудMixin, Validations, {
});

defineProjections(Model);

export default Model;
