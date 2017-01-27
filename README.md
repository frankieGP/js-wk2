# js-wk2

This is a question and answer message board built with Ember and Firebase. Users can post, edit, and delete questions and answers.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone https://github.com/frankieGP/js-wk2 this repository
* `cd js-wk2`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

## Setup and Install

This project uses the Firebase cloud service to store data. You'll need a Firebase account to setup the app. Create an account at http://firebase.google.com, then you should be taken to a user dashboard area with an option to Create a New Project. Select this option, provide a name for your new project, and select your Country/region from the drop-down menu. You'll then be taken to an "Overview" area. Where you'll be offered three options:

        Add Firebase to your iOS app
        Add Firebase to your Android app
        Add Firebase to your web app
Select Add Firebase to your web app. Firebase should respond with a pop-up modal window. Install ember install emberfire with the terminal, and then place the Firebase credentials from the modal window in it like this:

                  firebase = {
                    apiKey: "xxxx",
                    authDomain: "xxxx.firebaseapp.com",
                    databaseURL: "https://xxxx.firebaseio.com",
                    storageBucket: "xxxx.appspot.com",
                    messagingSenderId: "xxxx"
                  };
Now, from the Firebase Console, select the Database option from the navbar on the left, then choose RULES from the blue navbar at the top of the page. Change both the ".read", and ".write" properties here to "true" like this:

          {
            "rules": {
              ".read": true,
              ".write": true
            }
          }
## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
