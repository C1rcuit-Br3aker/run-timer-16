import Ember from 'ember';

export default Ember.Route.extend({
  model(url) {
    return fetch(`http://tiny-tn.herokuapp.com/collections/runs-cb/${url._id}`)
  .then((res) => res.json());
  },
});
