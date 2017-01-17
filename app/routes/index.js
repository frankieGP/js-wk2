import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },

  actions: {
    destroyQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    },
    
  saveQuestion3(params) {
    var newQuestion = this.store.createRecord('question', params);
    newQuestion.save();
    this.transitionTo('index');
  }


}
});
// var questions = [{
//   id: 1,
//   content: "What is 1 plus 1?",
//   author: "Ricky",
//   notes: "Math"
// }, {
//   id: 2,
//   content: "What is the tallest sunflower?",
//   author: "Margo",
//   notes: "Agriculture"
// }, {
//   id: 3,
//   content: "Who painted the Mona Lisa?",
//   author: "Sue",
//   notes: "Art"
// }];
