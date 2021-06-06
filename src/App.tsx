import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { RootStore } from './stores/RootStore';
import { StoreProvider } from './stores/StoreContext';
import { Error404 } from './pages/Error';
import './App.scss';

const rootStore = new RootStore();

const App: React.FC = () => {
  return (
    <StoreProvider value={rootStore}>
      <Router>
        <Switch>
          <Route path="/product">Product</Route>
          <Route path={['/', '/workbench']} exact>
            <Home />
          </Route>
          <Route path="/">
            <Error404 />
          </Route>
        </Switch>
      </Router>
    </StoreProvider>
  );
};

export default App;
