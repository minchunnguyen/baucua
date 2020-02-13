
import 'bootstrap/dist/css/bootstrap.css';
import './../node_modules/jquery/dist/jquery';
//import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/bootstrap/dist/js/bootstrap'
import './Style/App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import GamePlay from './components/GamePlay';
import { Provider } from 'react-redux';
import { store } from './Reducer/reducer';
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import SignUp from './components/SignUp';
import ManageUser from './components/ManageUser';
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {/* <GamePlay/> */}
        {/* <Login/> */}
        <Router>
          <Switch>
            <Route path="/users" component={ManageUser} />
            <Route exact path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <PrivateRoute path="/play" component={GamePlay} />
            <Redirect from="/" exact to="/login" />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
