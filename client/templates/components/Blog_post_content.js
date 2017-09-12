Template.Blog_post_content.helpers({
  HTMLContent() {
    let content = Template.instance().data.content;
    if (content) {
      return new Handlebars.SafeString(content.replace(/\n/g, '<br />'));
    }
  }
});
