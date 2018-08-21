import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/scs.css';
import App from './App';
import Redirect from './Redirect';
import Background from './Background';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import configureStore from './redux/store';
import {Provider} from 'react-redux';

//move someday
import _ from 'lodash';
const data = require('./static/data.json')
const boundX = _.keys(data).length;
const boundY = new Array(boundX);
for (let i = 0; i < boundX;i++) {
  boundY[i] = _.keys(data[i]).length;
}

let initialState = {
  data: require('./static/data.json'),
  dir: [''],
  pos: [0,0],
  boundX: boundX,
  boundY: boundY,
  name: '',
  jump: 'none'
}

let store = configureStore(initialState);

class Routing extends React.Component {
  render() {
    return (
      <div>
        <Background/>

        <Provider store = {store}>
          <Router>
            <Switch>
              <Route exact path = '/' component={Redirect}/>
              <Route exact path='/App' component={App}/>          
            </Switch>
          </Router>
        </Provider>
      </div>)
  }
}
ReactDOM.render(<Routing />, document.getElementById('root'));
registerServiceWorker();
