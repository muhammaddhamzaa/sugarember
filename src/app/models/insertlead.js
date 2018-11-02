import DS from 'ember-data';

export default DS.Model.extend({
  "first_name": DS.attr('string'),
  "last_name": DS.attr('string'),
  "email1": DS.attr('string'),
  "account_name": DS.attr('string'),
  "phone_work": DS.attr('string')
});
