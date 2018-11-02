import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login-page');
  this.route('leads');
  this.route('addLead');
  this.route('insertlead');
  this.route('deletelead');
});

export default Router;
