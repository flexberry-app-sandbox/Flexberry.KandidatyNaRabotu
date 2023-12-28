import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  наименование: DS.attr('string'),
  телОрганиз: DS.attr('number')
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-kandidaty-na-rabotu-организация.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-kandidaty-na-rabotu-организация.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  телОрганиз: {
    descriptionKey: 'models.i-i-s-kandidaty-na-rabotu-организация.validations.телОрганиз.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОрганизацияE', 'i-i-s-kandidaty-na-rabotu-организация', {
    наименование: attr('Наименование', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    телОрганиз: attr('Тел организ', { index: 2 })
  });

  modelClass.defineProjection('ОрганизацияL', 'i-i-s-kandidaty-na-rabotu-организация', {
    наименование: attr('Наименование', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    телОрганиз: attr('Тел организ', { index: 2 })
  });
};
