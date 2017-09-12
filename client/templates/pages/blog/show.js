Template.Blog_show_page.onCreated(function() {
  const slug = FlowRouter.getParam('slug');
  const handle = this.subscribe('postBySlug', slug);
  if (handle.ready()) {
    this.post = Posts.findOne({ slug: slug });
    if (!this.post) {
      FlowRouter.go('NotFound');
    }
  }
});

Template.Blog_show_page.helpers({
  post: function () {
    return Posts.findOne({ slug: FlowRouter.getParam('slug') });
  }
});
