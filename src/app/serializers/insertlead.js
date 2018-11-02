import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  normalizeResponse(store, primaryModelClass, payload, id, requestType){
    payload = {'leads': payload.records};
    return this._super(store, primaryModelClass, payload, id, requestType);
  },
  serializeIntoHash: function(hash, type, record, options) {
  Ember.assign(hash, this.serialize(record, options));
}
});
