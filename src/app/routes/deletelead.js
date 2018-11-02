import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    deleteData: function(){
      var id = this.get('controller').get('id');
      var deletion = this.store.findRecord('deletelead', id )
      .then(function(deletion)
      {
        deletion.destroyRecord()
        .then(function()
        {
          window.alert("record deleted!");
          this.transitionTo("leads");
        });
      })
      .catch(function(err)
      {
        window.alert("Error!");
        this.transitionTo("leads");

      });
    }
  }
});
