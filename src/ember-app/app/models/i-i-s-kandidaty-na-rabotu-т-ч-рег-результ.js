import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧРегРезультMixin
} from '../mixins/regenerated/models/i-i-s-kandidaty-na-rabotu-т-ч-рег-результ';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧРегРезультMixin, Validations, {
});

defineProjections(Model);

export default Model;
