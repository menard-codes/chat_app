import Loading from './components/Loading';

import Main from './pages/main';
import Login from './pages/login';

import './App.scss';

// ###

import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './app/firebaseApp'
// ###


function App() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <Router>
      <Switch>
        <Route
          path="/" component={Main}
          exact
        >
          {
            loading
              ? <div style={{width: '100%', height: '100vh', backgroundColor: 'white', display: 'grid', placeItems: 'center'}}>
                  <Loading isLoading={loading} />
                </div>
              : user
                ? <Main />
                : error
                  ? <h1>Error: {error}</h1>
                  : <Redirect to="/login" />
          }
        </Route>
        <Route path="/login">
          {
            user ? <Redirect to="/" /> : <Login />
          }
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
