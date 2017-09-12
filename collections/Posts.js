import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);
Posts = new Meteor.Collection('posts');
Posts.friendlySlugs({
  slugFrom: 'title',
  slugField: 'slug',
  distinct: true,
  updateSlug: true
});

Posts.helpers({
  author() {
    return Meteor.users.findOne(this.authorId);
  }
});

Posts.schema = new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  slug: {
    type: String,
    max: 200
  },
  authorId: {
    type: String,
    label: "Author",
    autoValue: function() {
      if (this.isInsert) {
        return Meteor.userId();
      }
    }
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    }
  },
  // Force value to be current date (on server) upon update
  // and don't allow it to be set upon insert.
  updatedAt: {
    type: Date,
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    },
    denyInsert: true,
    optional: true
  },
  content: {
    type: String,
    label: "Content",
    autoform: {
      rows: 7,
      // afFieldInput: {
      //   type: 'summernote'
      // }
    }
  }
});

Posts.attachSchema(Posts.schema);
