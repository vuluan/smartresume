import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import DashboardContainer from './components/layouts/DashboardContainer';
import LoginContainer from './components/layouts/LoginContainer';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/login" component={LoginContainer} />
        <Route exact component={DashboardContainer} />
      </Switch>
    </div>
  );
}

export default App;
