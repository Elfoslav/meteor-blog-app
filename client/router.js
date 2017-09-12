FlowRouter.globals.push({
  meta: {
    viewport: {
      name: 'viewport',
      content() {
        return 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no'
      }
    }
  }
});

// Make route names consistent with template names. Otherwise, you can get mad soon.

FlowRouter.route('/', {
  name: 'Home_page',
  action(params, queryParams) {
    BlazeLayout.render('Layout', { main: 'Home_page' });
  }
});

FlowRouter.route('/about', {
  name: 'About_page',
  action(params, queryParams) {
    BlazeLayout.render('Layout', { main: 'About_page' });
  }
});

FlowRouter.route('/blog', {
  name: 'Blog_page',
  action(params, queryParams) {
    BlazeLayout.render('Layout', { main: 'Blog_page' });
  }
});

FlowRouter.route('/blog/create', {
  name: 'Blog_create_page',
  action(params, queryParams) {
    BlazeLayout.render('Layout', { main: 'Blog_create_page' });
  }
});

FlowRouter.route('/blog/edit/:_id', {
  name: 'Blog_edit_page',
  action(params, queryParams) {
    BlazeLayout.render('Layout', { main: 'Blog_edit_page' });
  }
});

FlowRouter.route('/blog/posts/:slug', {
  name: 'Blog_show_page',
  action(params, queryParams) {
    BlazeLayout.render('Layout', { main: 'Blog_show_page' });
  }
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('Layout', { main: 'NotFound'});
  }
};
