import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as РегистАнкетыMixin
} from '../mixins/regenerated/models/i-i-s-kandidaty-na-rabotu-регист-анкеты';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(РегистАнкетыMixin, Validations, {
});

defineProjections(Model);

export default Model;
