import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kandidaty-na-rabotu-организация', 'Unit | Model | i-i-s-kandidaty-na-rabotu-организация', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-kandidaty-na-rabotu-вакант-должн',
    'model:i-i-s-kandidaty-na-rabotu-граф-собес',
    'model:i-i-s-kandidaty-na-rabotu-организация',
    'model:i-i-s-kandidaty-na-rabotu-планир-собес',
    'model:i-i-s-kandidaty-na-rabotu-рег-результ',
    'model:i-i-s-kandidaty-na-rabotu-регист-анкеты',
    'model:i-i-s-kandidaty-na-rabotu-сотруд',
    'model:i-i-s-kandidaty-na-rabotu-сотрудники',
    'model:i-i-s-kandidaty-na-rabotu-т-ч-граф-собес',
    'model:i-i-s-kandidaty-na-rabotu-т-ч-рег-результ',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
