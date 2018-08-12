// Import client startup through a single index entry point

import './routes.js';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from './routes.js';

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('app'));
});
