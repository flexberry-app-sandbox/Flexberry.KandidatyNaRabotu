import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПланирСобесMixin
} from '../mixins/regenerated/models/i-i-s-kandidaty-na-rabotu-планир-собес';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПланирСобесMixin, Validations, {
});

defineProjections(Model);

export default Model;
