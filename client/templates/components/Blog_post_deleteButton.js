Template.Blog_post_deleteButton.events({
  'click button'(e, template) {
    console.log(template.data._id);
    Meteor.call('Blog.post.delete', template.data._id, (error) => {
      if (error) {
        alert(error.reason);
      } else {
        FlowRouter.go('Blog_page');
      }
    });
  }
});
