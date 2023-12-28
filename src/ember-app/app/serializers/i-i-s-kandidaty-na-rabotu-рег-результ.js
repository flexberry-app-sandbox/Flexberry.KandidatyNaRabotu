import { Serializer as РегРезультSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kandidaty-na-rabotu-рег-результ';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РегРезультSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
