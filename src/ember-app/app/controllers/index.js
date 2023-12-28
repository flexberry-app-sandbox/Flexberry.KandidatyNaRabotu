import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.информация-об-организации.caption'),
          title: i18n.t('forms.application.sitemap.информация-об-организации.title'),
          children: [{
            link: 'i-i-s-kandidaty-na-rabotu-организация-l',
            caption: i18n.t('forms.application.sitemap.информация-об-организации.i-i-s-kandidaty-na-rabotu-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.информация-об-организации.i-i-s-kandidaty-na-rabotu-организация-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-kandidaty-na-rabotu-вакант-должн-l',
            caption: i18n.t('forms.application.sitemap.информация-об-организации.i-i-s-kandidaty-na-rabotu-вакант-должн-l.caption'),
            title: i18n.t('forms.application.sitemap.информация-об-организации.i-i-s-kandidaty-na-rabotu-вакант-должн-l.title'),
            icon: 'archive',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.документы.caption'),
          title: i18n.t('forms.application.sitemap.документы.title'),
          children: [{
            link: 'i-i-s-kandidaty-na-rabotu-граф-собес-l',
            caption: i18n.t('forms.application.sitemap.документы.i-i-s-kandidaty-na-rabotu-граф-собес-l.caption'),
            title: i18n.t('forms.application.sitemap.документы.i-i-s-kandidaty-na-rabotu-граф-собес-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-kandidaty-na-rabotu-рег-результ-l',
            caption: i18n.t('forms.application.sitemap.документы.i-i-s-kandidaty-na-rabotu-рег-результ-l.caption'),
            title: i18n.t('forms.application.sitemap.документы.i-i-s-kandidaty-na-rabotu-рег-результ-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-kandidaty-na-rabotu-планир-собес-l',
            caption: i18n.t('forms.application.sitemap.документы.i-i-s-kandidaty-na-rabotu-планир-собес-l.caption'),
            title: i18n.t('forms.application.sitemap.документы.i-i-s-kandidaty-na-rabotu-планир-собес-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-kandidaty-na-rabotu-регист-анкеты-l',
            caption: i18n.t('forms.application.sitemap.документы.i-i-s-kandidaty-na-rabotu-регист-анкеты-l.caption'),
            title: i18n.t('forms.application.sitemap.документы.i-i-s-kandidaty-na-rabotu-регист-анкеты-l.title'),
            icon: 'list',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.информация-о-сотрудниках.caption'),
          title: i18n.t('forms.application.sitemap.информация-о-сотрудниках.title'),
          children: [{
            link: 'i-i-s-kandidaty-na-rabotu-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.информация-о-сотрудниках.i-i-s-kandidaty-na-rabotu-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.информация-о-сотрудниках.i-i-s-kandidaty-na-rabotu-сотрудники-l.title'),
            icon: 'address card',
            children: null
          }]
        }
      ]
    };
  }),
})