import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/scs.css';
import App from './App';
import Redirect from './Redirect';
import Background from './Background';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class Routing extends React.Component {
  render() {
    return (
    <div>
      <Background/>
      <Router>
        <Switch>
          <Route exact path = '/' component={Redirect}/>
          <Route exact path='/App' render={()=><App pos={[0,0]} />}/>
          <Route path='/gallery' render={()=><App pos={[1,0]} />}/>
          <Route path='/exec' render={()=><App pos={[0,0]} />}/>
          <Route path='/info' render={()=><App pos={[2,0]} />}/>
          <Route path='/other' render={()=><App pos={[3,0]} />}/>
        </Switch>
      </Router>
    </div>)
  }
}

ReactDOM.render(<Routing />, document.getElementById('root'));
registerServiceWorker();
