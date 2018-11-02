import DS from 'ember-data';
import Ember from 'ember';


export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  normalizeResponse(store, primaryModelClass, payload, id, requestType){
    payload = {'leads': payload.records};
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
