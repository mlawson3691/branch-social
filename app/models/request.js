import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  avatar: DS.attr(),
  sentById: DS.attr(),
});
