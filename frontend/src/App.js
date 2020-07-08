import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import './login.css';
import DashboardContainer from './components/layouts/DashboardContainer';
import LoginContainer from './components/layouts/LoginContainer';
import RegisterContainer from './components/layouts/RegisterContainer';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/register" component={RegisterContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact component={DashboardContainer} />
      </Switch>
    </div>
  );
}

export default App;
