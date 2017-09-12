Template.Blog_post_form.onCreated(function () {
  this.errors = new ReactiveArray([]);

  // type passed by parent template
  if (this.data.type === 'update') {
    this.autorun(() => {
      let handle = this.subscribe('postById', FlowRouter.getParam('_id'));
    });
  }
});

Template.Blog_post_form.events({
  'submit #blog-post-form'(e, template) {
    e.preventDefault();
    template.errors.clear();
    let form = e.target;
    let post = $(form).serializeObject();

    console.log('post: ', post);
    if (template.data.type === 'insert') {
      Meteor.call('Blog.post.insert', post, function(error, slug) {
        afterMethodCall({
          error: error,
          slug: slug,
          template: template
        });
      });
    }

    if (template.data.type === 'update') {
      console.log('updating: ', post);
      Meteor.call('Blog.post.update', post, function(error, slug) {
        afterMethodCall({
          error: error,
          slug: slug,
          template: template
        });
      });
    }
  }
});

Template.Blog_post_form.helpers({
  errors() {
    return Template.instance().errors.list();
  },
  post() {
    return Posts.findOne(FlowRouter.getParam('_id'));
  }
});

function afterMethodCall({ error, template, slug }) {
  if (error) {
    // TODO more visible error notification
    template.errors.push(error.reason);
  } else {
    FlowRouter.go('Blog_show_page', { slug: slug });
  }
}
