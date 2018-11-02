import Route from '@ember/routing/route';

export default Route.extend({
  actions:
  {
    addData: function(){
      var fname = this.get('controller').get('fname');
      var lname = this.get('controller').get('lname');
      var phone = this.get('controller').get('phone');
      var account = this.get('controller').get('account');
      var email = this.get('controller').get('email');
      var model = this.store.createRecord('insertlead', {
          first_name: fname,
          last_name: lname,
          email1: email,
          phone_work: phone,
          account_name: account
      });

      model.save();
      $(':input').val('');
      window.alert("Saving, press 'ok' to confirm")
      this.transitionTo('leads');
      }
  }
});
