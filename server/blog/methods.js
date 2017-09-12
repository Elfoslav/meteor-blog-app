Meteor.methods({
  'Blog.post.insert'(post) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized', 'You have to be logged in to perform this action.');
    }

    checkExistingPost(post.title);

    let id = Posts.insert(post);

    // return only slug
    return Posts.findOne(id).slug;
  },
  'Blog.post.update'(post) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized', 'You have to be logged in to perform this action.');
    }

    if (!post._id) {
      throw new Meteor.Error('missing-post-id', 'Missing post ID');
    }

    Posts.update(post._id, {
      $set: {
        title: post.title,
        content: post.content
      }
    });

    return Posts.findOne(post._id).slug;
  },
  'Blog.post.delete'(_id) {
    return Posts.remove(_id);
  }
});

/**
 * Title must be unique. This function checks if there is a post with given title
 * @param title
 * @throws Meteor.Error if there is existing post with given title
 */
function checkExistingPost(title) {
  let existingPost = Posts.findOne({ title: {
    $regex: new RegExp('^' + title + '$', "i")
  }});

  if (existingPost) {
    console.log('Existing post: ', existingPost);
    throw new Meteor.Error('bad-request', `Post with title: "${title}" already exists. Choose another title.`);
  }
}
