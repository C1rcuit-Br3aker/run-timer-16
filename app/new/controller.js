import Ember from 'ember';

export default Ember.Controller.extend({
  runsPage() {
    this.transitionToRoute(`new`);
  },
});
