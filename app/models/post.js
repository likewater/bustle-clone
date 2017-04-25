import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  imageURL: DS.attr(),
  author: DS.attr(),
  date: DS.attr(),
  content: DS.attr()
});
