import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from '@components/NotFound';
import MainPage from '@pages/MainPage';
import AppLayout from '@components/AppLayout';
const App = () => {
  return (
    <Router>
      <AppLayout>
        <Switch>
          <Route path="/" exact render={() => <MainPage />} />
          <Route path="*" component={NotFound} />
        </Switch>
      </AppLayout>
    </Router>
  );
};

export default App;
