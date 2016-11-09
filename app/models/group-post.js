import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr(),
  content: DS.attr(),
  member: DS.belongsTo('member', {async:true}),
  group: DS.belongsTo('group', {async:true})
});
