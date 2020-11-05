import './App.css';
import Form from './components/form/form/Form';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/hi'>
            hi
          </Route>
          <Route path='/'>
            <Form />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
