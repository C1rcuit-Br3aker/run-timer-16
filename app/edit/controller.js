import Ember from 'ember';

export default Ember.Controller.extend({
  submitEdit() {
    const attributes = this.model;

    fetch(`http://tiny-tn.herokuapp.com/collections/runs-cb/${attributes._id}`, {
      method: `PUT`,
      headers: {
        Accept: `application/json`,
        'Content-type': `application/json`,
      },
      body: JSON.stringify(attributes),
    }).then((res) => res.json())
    .then((info) => {
      this.transitionToRoute(`details`, info._id);
    });
  },

});
