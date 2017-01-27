import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('additional', {path: '/additional/:additional_id'});
  this.route('answers');
});

export default Router;
