Template.Blog_page.onCreated(function() {
  const handle = this.subscribe('posts.public');
  if (handle.ready()) {
    // todo hide/remove loading icon
  } else {
    // todo show loading icon
  }
});

Template.Blog_page.helpers({
  posts: function() {
    return Posts.find();
  }
});
