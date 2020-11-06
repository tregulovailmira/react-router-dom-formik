import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home'));
const SignUpPage = React.lazy(() => import('./pages/SignUpPage'));
const SignInPage = React.lazy(() => import('./pages/SignInPage'));
function App() {
  return (
    <div className="container">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={SignInPage} />
            <Route exact path="/signup" component={SignUpPage} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
