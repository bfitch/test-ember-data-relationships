import DS from 'ember-data';
const { attr, belongsTo } = DS;

export default DS.Model.extend({
  title: attr(),
  body: attr(),
  user: belongsTo('user', { async: true })
});
