import Ember from 'ember';

export default Ember.Controller.extend({
  submitForm() {
    const runs = {
      time: this.time,
      date: this.date,
      details: this.details,
    };

    fetch(`http://tiny-tn.herokuapp.com/collections/runs-cb`, {
      method: `POST`,
      headers: {
        Accept: `application/json`,
        'Content-type': `application/json`,
      },
      body: JSON.stringify(runs),
    }).then((res) => res.json())
    .then((info) => {
      this.clearForm();
      this.transitionToRoute(`index`);
    });
  },

  clearForm() {
    this.set(`time`, ``);
    this.set(`date`, ``);
    this.set(`details`, ``);
  },

});
