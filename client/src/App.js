import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Auth, User, Home, New, Link, NotFound } from './pages';

import './scss/index.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/u/:username' component={User} />
        <Route exact path='/auth' component={Auth} />
        <Route exact path='/new' component={New} />
        <Route exact path='/link/:id' component={Link} />
        <Route path='*' exact={true} component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
