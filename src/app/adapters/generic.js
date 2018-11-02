import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: "http://localhost/SugarPro-Full-8.0.0",
  namespace: "rest/v10",
  headers: Ember.computed(function() {
    return {
      'oauth-token': sessionStorage.getItem('token'),
      'Content-Type': 'application/json'
    }
  })
});
