import DS from 'ember-data';

export default DS.Model.extend({
  answerauthor: DS.attr(),
  answercontent: DS.attr(),
  question: DS.belongsTo('question', { async: true })

});
