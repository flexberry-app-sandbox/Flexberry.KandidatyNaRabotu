import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDСотруд: DS.attr('number'),
  должность: DS.attr('string'),
  фИОСотр: DS.attr('string')
});

export let ValidationRules = {
  iDСотруд: {
    descriptionKey: 'models.i-i-s-kandidaty-na-rabotu-сотрудники.validations.iDСотруд.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-kandidaty-na-rabotu-сотрудники.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИОСотр: {
    descriptionKey: 'models.i-i-s-kandidaty-na-rabotu-сотрудники.validations.фИОСотр.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-kandidaty-na-rabotu-сотрудники', {
    iDСотруд: attr('I d сотруд', { index: 0 }),
    фИОСотр: attr('Ф и о сотр', { index: 1 }),
    должность: attr('Должность', { index: 2 })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-kandidaty-na-rabotu-сотрудники', {
    iDСотруд: attr('I d сотруд', { index: 0 }),
    фИОСотр: attr('Ф и о сотр', { index: 1 }),
    должность: attr('Должность', { index: 2 })
  });
};
