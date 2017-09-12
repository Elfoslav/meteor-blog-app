Template.formatDate.helpers({
  formattedDate() {
    var date = Template.instance().data.date;
    if (date) {
      return date.toLocaleString();
    }
  }
});
