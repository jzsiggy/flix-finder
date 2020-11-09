import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Form from './components/form/form/Form';
import Login from './components/auth/login/Login';
import Signup from './components/auth/signup/Signup';
import Playlist from './components/playlist/playlist/Playlist';

const App = () => { 
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Form />
          </Route>
          <Route path='/list'>
            <Playlist />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
