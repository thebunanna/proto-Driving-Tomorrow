import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'

const App = require('../imports/ui/App.js').default;
import registerServiceWorker from './registerServiceWorker';

Meteor.startup(() =>
{
  console.log(App)
  render(<App />, document.getElementById('render-target'));
  registerServiceWorker();
});
