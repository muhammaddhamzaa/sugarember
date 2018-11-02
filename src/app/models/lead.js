import DS from 'ember-data';

export default DS.Model.extend({
  "name": DS.attr('string'),
  "status": DS.attr('string'),
  "email1": DS.attr('string'),
  "account_name": DS.attr('string'),
  "phone_work": DS.attr('string'),
  "date_entered": DS.attr('string'),
  "date_modified": DS.attr('string')
});
