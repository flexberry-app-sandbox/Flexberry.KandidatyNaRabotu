import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  планирСобес: DS.belongsTo('i-i-s-kandidaty-na-rabotu-планир-собес', { inverse: null, async: false }),
  графСобес: DS.belongsTo('i-i-s-kandidaty-na-rabotu-граф-собес', { inverse: 'тЧГрафСобес', async: false })
});

export let ValidationRules = {
  планирСобес: {
    descriptionKey: 'models.i-i-s-kandidaty-na-rabotu-т-ч-граф-собес.validations.планирСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  графСобес: {
    descriptionKey: 'models.i-i-s-kandidaty-na-rabotu-т-ч-граф-собес.validations.графСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧГрафСобесE', 'i-i-s-kandidaty-na-rabotu-т-ч-граф-собес', {
    планирСобес: belongsTo('i-i-s-kandidaty-na-rabotu-планир-собес', 'Планир собес', {
      иметьПриСебе: attr('Иметь при себе', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'иметьПриСебе' })
  });
};
