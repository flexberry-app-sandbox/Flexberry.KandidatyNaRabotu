import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kandidaty-na-rabotu-организация', 'Unit | Serializer | i-i-s-kandidaty-na-rabotu-организация', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kandidaty-na-rabotu-организация',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-kandidaty-na-rabotu-итог-собесед',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
