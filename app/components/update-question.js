import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    update(question) {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        notes: this.get('notes'),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    },
     validateForm()
    {
      var fields = ["content, author", "notes"];

      var i, l = fields.length;
      var fieldname;
      for (i = 0; i < l; i++) {
        fieldname = fields[i];
        if (document.forms["form-group"][fieldname].value === "") {
          alert(fieldname + " can not be empty");
          return false;
        }
      }
      return true;
    }

  }
});
