var questions = [{
  id: 1,
  content: "What is 1 plus 1?",
  author: "Ricky",
  notes: "Math"
}, {
  id: 2,
  content: "What is the tallest sunflower?",
  author: "Margo",
  notes: "Agriculture"
}, {
  id: 3,
  content: "Who painted the Mona Lisa?",
  author: "Sue",
  notes: "Art"
}];

export default Ember.Route.extend({
  model() {
    return questions;
  },
});
