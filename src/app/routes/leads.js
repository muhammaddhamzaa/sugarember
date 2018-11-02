import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    var model = this.store.findAll('lead').catch(function(err){
      window.alert("Session expired, please login!");
      window.location = "login-page";
    });
    return model;
  },
  setupController: function(controller, model){
    controller.set('model',model);
  },
});
