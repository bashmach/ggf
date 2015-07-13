import Ember from 'ember';

const {
  Route,
  RSVP
} = Ember;

export default Route.extend({

  model: function(params) {
    let store = this.store;
    let tournamentId = this.paramsFor('tournament').tournamentId;

    return RSVP.hash({
      matches: store.find('match', {tournamentId: tournamentId}),
      tournament: store.peekAll('tournament').findBy('id', tournamentId)
    });
  },

  setupController (controller, model, transition) {
    this._super(controller, model);

    controller.set('tournament', model.tournament);
    controller.set('matches', model.matches);
  }
});
