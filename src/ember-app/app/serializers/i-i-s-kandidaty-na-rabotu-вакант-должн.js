import { Serializer as ВакантДолжнSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kandidaty-na-rabotu-вакант-должн';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ВакантДолжнSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
