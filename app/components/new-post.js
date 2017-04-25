import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    showPostForm() {
      this.set('addNewPost', true);
    },

    savePost() {
      var params = {
        title: this.get('title'),
        imageURL: this.get('imageURL'),
        author: this.get('author'),
        date: this.get('date'),
        content: this.get('content'),
      };
      this.set('addNewPost', false);
      this.sendAction('savePost', params);
    }
  }
});
