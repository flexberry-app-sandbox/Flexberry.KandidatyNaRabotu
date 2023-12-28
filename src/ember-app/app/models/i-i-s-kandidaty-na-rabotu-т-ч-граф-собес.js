import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧГрафСобесMixin
} from '../mixins/regenerated/models/i-i-s-kandidaty-na-rabotu-т-ч-граф-собес';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧГрафСобесMixin, Validations, {
});

defineProjections(Model);

export default Model;
