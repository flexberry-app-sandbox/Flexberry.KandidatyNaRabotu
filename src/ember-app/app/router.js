import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kandidaty-na-rabotu-вакант-должн-l');
  this.route('i-i-s-kandidaty-na-rabotu-вакант-должн-e',
  { path: 'i-i-s-kandidaty-na-rabotu-вакант-должн-e/:id' });
  this.route('i-i-s-kandidaty-na-rabotu-вакант-должн-e.new',
  { path: 'i-i-s-kandidaty-na-rabotu-вакант-должн-e/new' });
  this.route('i-i-s-kandidaty-na-rabotu-граф-собес-l');
  this.route('i-i-s-kandidaty-na-rabotu-граф-собес-e',
  { path: 'i-i-s-kandidaty-na-rabotu-граф-собес-e/:id' });
  this.route('i-i-s-kandidaty-na-rabotu-граф-собес-e.new',
  { path: 'i-i-s-kandidaty-na-rabotu-граф-собес-e/new' });
  this.route('i-i-s-kandidaty-na-rabotu-организация-l');
  this.route('i-i-s-kandidaty-na-rabotu-организация-e',
  { path: 'i-i-s-kandidaty-na-rabotu-организация-e/:id' });
  this.route('i-i-s-kandidaty-na-rabotu-организация-e.new',
  { path: 'i-i-s-kandidaty-na-rabotu-организация-e/new' });
  this.route('i-i-s-kandidaty-na-rabotu-планир-собес-l');
  this.route('i-i-s-kandidaty-na-rabotu-планир-собес-e',
  { path: 'i-i-s-kandidaty-na-rabotu-планир-собес-e/:id' });
  this.route('i-i-s-kandidaty-na-rabotu-планир-собес-e.new',
  { path: 'i-i-s-kandidaty-na-rabotu-планир-собес-e/new' });
  this.route('i-i-s-kandidaty-na-rabotu-рег-результ-l');
  this.route('i-i-s-kandidaty-na-rabotu-рег-результ-e',
  { path: 'i-i-s-kandidaty-na-rabotu-рег-результ-e/:id' });
  this.route('i-i-s-kandidaty-na-rabotu-рег-результ-e.new',
  { path: 'i-i-s-kandidaty-na-rabotu-рег-результ-e/new' });
  this.route('i-i-s-kandidaty-na-rabotu-регист-анкеты-l');
  this.route('i-i-s-kandidaty-na-rabotu-регист-анкеты-e',
  { path: 'i-i-s-kandidaty-na-rabotu-регист-анкеты-e/:id' });
  this.route('i-i-s-kandidaty-na-rabotu-регист-анкеты-e.new',
  { path: 'i-i-s-kandidaty-na-rabotu-регист-анкеты-e/new' });
  this.route('i-i-s-kandidaty-na-rabotu-сотруд-l');
  this.route('i-i-s-kandidaty-na-rabotu-сотруд-e',
  { path: 'i-i-s-kandidaty-na-rabotu-сотруд-e/:id' });
  this.route('i-i-s-kandidaty-na-rabotu-сотруд-e.new',
  { path: 'i-i-s-kandidaty-na-rabotu-сотруд-e/new' });
  this.route('i-i-s-kandidaty-na-rabotu-сотрудники-l');
  this.route('i-i-s-kandidaty-na-rabotu-сотрудники-e',
  { path: 'i-i-s-kandidaty-na-rabotu-сотрудники-e/:id' });
  this.route('i-i-s-kandidaty-na-rabotu-сотрудники-e.new',
  { path: 'i-i-s-kandidaty-na-rabotu-сотрудники-e/new' });
});

export default Router;
