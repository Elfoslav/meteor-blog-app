Meteor.publish('posts.public', function () {
  return Posts.find();
});

Meteor.publish('postBySlug', function (slug) {
  check(slug, String);
  return Posts.find({ slug: slug });
});

Meteor.publish('postById', function (_id) {
  check(_id, String);
  return Posts.find({ _id: _id });
});
