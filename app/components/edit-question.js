import Ember from 'ember';

export default Ember.Component.extend({
  editQuestionForm: false,
  actions: {
    editQuestionForm() {
      this.set('editQuestionForm', true);
    },
    edit(question) {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        notes: this.get('notes'),
      };
      this.set('editQuestionForm', false);
      this.sendAction('edit', question, params);

  }
  }
});
