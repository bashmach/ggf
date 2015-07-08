import Ember from 'ember';

let AuthenticationInitializer = {
  name: 'authentication',

  initialize: function (instance) {
    let Session = instance.container.lookup('simple-auth-session:main');

    Session.reopen({
      user: Ember.computed(function () {
        return this.get('secure').user;
      })
    });

    //let OAuth2 = instance.container.lookup('simple-auth-authenticator:oauth2-password-grant');
    //OAuth2.reopen({
    //  makeRequest: function (url, data) {
    //
    //  }
    //});
  }
};

export default AuthenticationInitializer;