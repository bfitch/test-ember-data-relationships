import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // return this.get('store').find('user', 1);
    return this.get('store').findAll('post');
  }
});
