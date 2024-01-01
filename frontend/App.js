// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import UserListPage from './pages/UserListPage';
import UserDetailsPage from './pages/UserDetailsPage';
import UpdateUserPage from './pages/UpdateUserPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/users" exact component={UserListPage} />
        <Route path="/users/:number" component={UserDetailsPage} />
        <Route path="/users/:number/update" component={UpdateUserPage} />
      </Switch>
    </Router>
  );
};

export default App;
