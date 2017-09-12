Template.Counter.onCreated(function counterOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.Counter.helpers({
  counter() {
    return Template.instance().counter.get();
  }
});

Template.Counter.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  }
});
