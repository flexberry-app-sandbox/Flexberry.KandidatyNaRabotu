import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISKandidaty_na_rabotuВакантДолжнLForm from './forms/i-i-s-kandidaty-na-rabotu-вакант-должн-l';
import IISKandidaty_na_rabotuГрафСобесLForm from './forms/i-i-s-kandidaty-na-rabotu-граф-собес-l';
import IISKandidaty_na_rabotuОрганизацияLForm from './forms/i-i-s-kandidaty-na-rabotu-организация-l';
import IISKandidaty_na_rabotuПланирСобесLForm from './forms/i-i-s-kandidaty-na-rabotu-планир-собес-l';
import IISKandidaty_na_rabotuРегРезультLForm from './forms/i-i-s-kandidaty-na-rabotu-рег-результ-l';
import IISKandidaty_na_rabotuРегистАнкетыLForm from './forms/i-i-s-kandidaty-na-rabotu-регист-анкеты-l';
import IISKandidaty_na_rabotuСотрудLForm from './forms/i-i-s-kandidaty-na-rabotu-сотруд-l';
import IISKandidaty_na_rabotuСотрудникиLForm from './forms/i-i-s-kandidaty-na-rabotu-сотрудники-l';
import IISKandidaty_na_rabotuВакантДолжнEForm from './forms/i-i-s-kandidaty-na-rabotu-вакант-должн-e';
import IISKandidaty_na_rabotuГрафСобесEForm from './forms/i-i-s-kandidaty-na-rabotu-граф-собес-e';
import IISKandidaty_na_rabotuОрганизацияEForm from './forms/i-i-s-kandidaty-na-rabotu-организация-e';
import IISKandidaty_na_rabotuПланирСобесEForm from './forms/i-i-s-kandidaty-na-rabotu-планир-собес-e';
import IISKandidaty_na_rabotuРегРезультEForm from './forms/i-i-s-kandidaty-na-rabotu-рег-результ-e';
import IISKandidaty_na_rabotuРегистАнкетыEForm from './forms/i-i-s-kandidaty-na-rabotu-регист-анкеты-e';
import IISKandidaty_na_rabotuСотрудEForm from './forms/i-i-s-kandidaty-na-rabotu-сотруд-e';
import IISKandidaty_na_rabotuСотрудникиEForm from './forms/i-i-s-kandidaty-na-rabotu-сотрудники-e';
import IISKandidaty_na_rabotuВакантДолжнModel from './models/i-i-s-kandidaty-na-rabotu-вакант-должн';
import IISKandidaty_na_rabotuГрафСобесModel from './models/i-i-s-kandidaty-na-rabotu-граф-собес';
import IISKandidaty_na_rabotuОрганизацияModel from './models/i-i-s-kandidaty-na-rabotu-организация';
import IISKandidaty_na_rabotuПланирСобесModel from './models/i-i-s-kandidaty-na-rabotu-планир-собес';
import IISKandidaty_na_rabotuРегРезультModel from './models/i-i-s-kandidaty-na-rabotu-рег-результ';
import IISKandidaty_na_rabotuРегистАнкетыModel from './models/i-i-s-kandidaty-na-rabotu-регист-анкеты';
import IISKandidaty_na_rabotuСотрудModel from './models/i-i-s-kandidaty-na-rabotu-сотруд';
import IISKandidaty_na_rabotuСотрудникиModel from './models/i-i-s-kandidaty-na-rabotu-сотрудники';
import IISKandidaty_na_rabotuТЧГрафСобесModel from './models/i-i-s-kandidaty-na-rabotu-т-ч-граф-собес';
import IISKandidaty_na_rabotuТЧРегРезультModel from './models/i-i-s-kandidaty-na-rabotu-т-ч-рег-результ';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kandidaty-na-rabotu-вакант-должн': IISKandidaty_na_rabotuВакантДолжнModel,
    'i-i-s-kandidaty-na-rabotu-граф-собес': IISKandidaty_na_rabotuГрафСобесModel,
    'i-i-s-kandidaty-na-rabotu-организация': IISKandidaty_na_rabotuОрганизацияModel,
    'i-i-s-kandidaty-na-rabotu-планир-собес': IISKandidaty_na_rabotuПланирСобесModel,
    'i-i-s-kandidaty-na-rabotu-рег-результ': IISKandidaty_na_rabotuРегРезультModel,
    'i-i-s-kandidaty-na-rabotu-регист-анкеты': IISKandidaty_na_rabotuРегистАнкетыModel,
    'i-i-s-kandidaty-na-rabotu-сотруд': IISKandidaty_na_rabotuСотрудModel,
    'i-i-s-kandidaty-na-rabotu-сотрудники': IISKandidaty_na_rabotuСотрудникиModel,
    'i-i-s-kandidaty-na-rabotu-т-ч-граф-собес': IISKandidaty_na_rabotuТЧГрафСобесModel,
    'i-i-s-kandidaty-na-rabotu-т-ч-рег-результ': IISKandidaty_na_rabotuТЧРегРезультModel
  },

  'application-name': 'Kandidaty_na_rabotu',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Kandidaty_na_rabotu',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kandidaty_na_rabotu',
          title: 'Kandidaty_na_rabotu'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'информация-об-организации': {
          caption: 'Информация об организации',
          title: 'Информация об организации',
          'i-i-s-kandidaty-na-rabotu-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-kandidaty-na-rabotu-вакант-должн-l': {
            caption: 'Вакантная должность',
            title: ''
          }
        },
        документы: {
          caption: 'Документы',
          title: 'Документы',
          'i-i-s-kandidaty-na-rabotu-граф-собес-l': {
            caption: 'График собеседований',
            title: ''
          },
          'i-i-s-kandidaty-na-rabotu-рег-результ-l': {
            caption: 'Регистрация результатов',
            title: ''
          },
          'i-i-s-kandidaty-na-rabotu-планир-собес-l': {
            caption: 'Планирование собеседования',
            title: ''
          },
          'i-i-s-kandidaty-na-rabotu-регист-анкеты-l': {
            caption: 'Регистрация анкеты',
            title: ''
          }
        },
        'информация-о-сотрудниках': {
          caption: 'Информация о сотрудниках',
          title: 'Информация о сотрудниках',
          'i-i-s-kandidaty-na-rabotu-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-kandidaty-na-rabotu-вакант-должн-l': IISKandidaty_na_rabotuВакантДолжнLForm,
    'i-i-s-kandidaty-na-rabotu-граф-собес-l': IISKandidaty_na_rabotuГрафСобесLForm,
    'i-i-s-kandidaty-na-rabotu-организация-l': IISKandidaty_na_rabotuОрганизацияLForm,
    'i-i-s-kandidaty-na-rabotu-планир-собес-l': IISKandidaty_na_rabotuПланирСобесLForm,
    'i-i-s-kandidaty-na-rabotu-рег-результ-l': IISKandidaty_na_rabotuРегРезультLForm,
    'i-i-s-kandidaty-na-rabotu-регист-анкеты-l': IISKandidaty_na_rabotuРегистАнкетыLForm,
    'i-i-s-kandidaty-na-rabotu-сотруд-l': IISKandidaty_na_rabotuСотрудLForm,
    'i-i-s-kandidaty-na-rabotu-сотрудники-l': IISKandidaty_na_rabotuСотрудникиLForm,
    'i-i-s-kandidaty-na-rabotu-вакант-должн-e': IISKandidaty_na_rabotuВакантДолжнEForm,
    'i-i-s-kandidaty-na-rabotu-граф-собес-e': IISKandidaty_na_rabotuГрафСобесEForm,
    'i-i-s-kandidaty-na-rabotu-организация-e': IISKandidaty_na_rabotuОрганизацияEForm,
    'i-i-s-kandidaty-na-rabotu-планир-собес-e': IISKandidaty_na_rabotuПланирСобесEForm,
    'i-i-s-kandidaty-na-rabotu-рег-результ-e': IISKandidaty_na_rabotuРегРезультEForm,
    'i-i-s-kandidaty-na-rabotu-регист-анкеты-e': IISKandidaty_na_rabotuРегистАнкетыEForm,
    'i-i-s-kandidaty-na-rabotu-сотруд-e': IISKandidaty_na_rabotuСотрудEForm,
    'i-i-s-kandidaty-na-rabotu-сотрудники-e': IISKandidaty_na_rabotuСотрудникиEForm
  },

});

export default translations;
