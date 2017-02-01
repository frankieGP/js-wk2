import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer() {
     var params = {
       answerauthor: this.get('answerauthor'),
       answercontent: this.get('answercontent'),
       question: this.get('question')
     };
     this.set('addNewAnswer', false);
     this.sendAction('saveAnswer', params);
     this.set('answerauthor')=="";
     this.set('answercontent')=="";
   }
  }
});
