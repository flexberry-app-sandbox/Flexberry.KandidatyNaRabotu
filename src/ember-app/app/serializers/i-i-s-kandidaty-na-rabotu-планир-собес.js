import { Serializer as ПланирСобесSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kandidaty-na-rabotu-планир-собес';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПланирСобесSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
