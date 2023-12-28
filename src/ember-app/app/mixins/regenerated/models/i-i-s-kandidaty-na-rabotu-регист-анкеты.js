import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаРегистр: DS.attr('date', { defaultValue() { return new Date(); } }),
  иНН: DS.attr('number'),
  номерТелефона: DS.attr('number'),
  серНомПаспорта: DS.attr('number'),
  снилс: DS.attr('number'),
  фИОКандид: DS.attr('string'),
  элПочта: DS.attr('string'),
  вакантДолжн: DS.belongsTo('i-i-s-kandidaty-na-rabotu-вакант-должн', { inverse: null, async: false }),
  организация: DS.belongsTo('i-i-s-kandidaty-na-rabotu-организация', { inverse: null, async: false })
});

export let ValidationRules = {
  датаРегистр: {
    descriptionKey: 'models.i-i-s-kandidaty-na-rabotu-регист-анкеты.validations.датаРегистр.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  иНН: {
    descriptionKey: 'models.i-i-s-kandidaty-na-rabotu-регист-анкеты.validations.иНН.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерТелефона: {
    descriptionKey: 'models.i-i-s-kandidaty-na-rabotu-регист-анкеты.validations.номерТелефона.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  серНомПаспорта: {
    descriptionKey: 'models.i-i-s-kandidaty-na-rabotu-регист-анкеты.validations.серНомПаспорта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  снилс: {
    descriptionKey: 'models.i-i-s-kandidaty-na-rabotu-регист-анкеты.validations.снилс.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИОКандид: {
    descriptionKey: 'models.i-i-s-kandidaty-na-rabotu-регист-анкеты.validations.фИОКандид.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  элПочта: {
    descriptionKey: 'models.i-i-s-kandidaty-na-rabotu-регист-анкеты.validations.элПочта.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  вакантДолжн: {
    descriptionKey: 'models.i-i-s-kandidaty-na-rabotu-регист-анкеты.validations.вакантДолжн.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-kandidaty-na-rabotu-регист-анкеты.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РегистАнкетыE', 'i-i-s-kandidaty-na-rabotu-регист-анкеты', {
    датаРегистр: attr('Дата регистр', { index: 0 }),
    фИОКандид: attr('Ф и о кандид', { index: 1 }),
    серНомПаспорта: attr('Сер ном паспорта', { index: 2 }),
    иНН: attr('ИНН', { index: 3 }),
    снилс: attr('Снилс', { index: 4 }),
    номерТелефона: attr('Номер телефона', { index: 5 }),
    элПочта: attr('Эл почта', { index: 6 }),
    организация: belongsTo('i-i-s-kandidaty-na-rabotu-организация', 'Организация', {
      наименование: attr('Наименование', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'наименование' }),
    вакантДолжн: belongsTo('i-i-s-kandidaty-na-rabotu-вакант-должн', 'Вакант должн', {
      должность: attr('Должность', { index: 10, hidden: true })
    }, { index: 9, displayMemberPath: 'должность' })
  });

  modelClass.defineProjection('РегистАнкетыL', 'i-i-s-kandidaty-na-rabotu-регист-анкеты', {
    датаРегистр: attr('Дата регистр', { index: 0 }),
    фИОКандид: attr('Ф и о кандид', { index: 1 }),
    серНомПаспорта: attr('Сер ном паспорта', { index: 2 }),
    иНН: attr('ИНН', { index: 3 }),
    снилс: attr('Снилс', { index: 4 }),
    номерТелефона: attr('Номер телефона', { index: 5 }),
    элПочта: attr('Эл почта', { index: 6 }),
    организация: belongsTo('i-i-s-kandidaty-na-rabotu-организация', 'Наименование', {
      наименование: attr('Наименование', { index: 7 })
    }, { index: -1, hidden: true }),
    вакантДолжн: belongsTo('i-i-s-kandidaty-na-rabotu-вакант-должн', 'Должность', {
      должность: attr('Должность', { index: 8 })
    }, { index: -1, hidden: true })
  });
};
