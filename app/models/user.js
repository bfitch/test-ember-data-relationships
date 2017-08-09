import DS from 'ember-data';
const { attr, hasMany } = DS;

export default DS.Model.extend({
  name: attr(),
  email: attr(),
  address: attr(),
  posts: hasMany('post', { async: true })
});
