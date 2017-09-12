Meteor.users.helpers({
  posts() {
    return Posts.find({ authorId: this._id });
  }
});
