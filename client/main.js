import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL'
});
