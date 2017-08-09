import DS from 'ember-data';
const { JSONSerializer } = DS;

export default JSONSerializer.extend({
  keyForRelationship: function(key, relationship, method) {
     if (relationship === 'belongsTo') {
       return `${key}Id`;
     }
  }
});
