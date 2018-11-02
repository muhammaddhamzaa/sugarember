import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  ajax: Ember.inject.service(),
  actions: {
    submit: function(){
      this.get('ajax').request('http://127.0.0.1/SugarPro-Full-8.0.0/rest/v10/oauth2/token',{
        method: 'POST',
        headers:{
        'Content-Type': 'application/json'
        },
        data:{
          "grant_type": "password",
          "client_id": "sugar",
          "client_secret": "",
          "username": this.get('user'),
          "password": this.get('pass'),
          "platform": "base"
        },
        success: function(response){
          sessionStorage.setItem('token', response.access_token);
          window.location.assign('/leads')
        },
        error: function(){
          window.alert("Please enter correct credentials");
        },
        dataType: 'json'
      });
    }
  }
});
