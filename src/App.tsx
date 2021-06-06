import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { RootStore } from './stores/RootStore';
import { StoreProvider } from './stores/StoreContext';

const rootStore = new RootStore();

const App: React.FC = () => {
  return (
    <StoreProvider value={rootStore}>
      <Router>
        <Switch>
          <Route path="/product">Product</Route>
          <Route path="/workbench">Workbench</Route>
          <Route path="/">
            <Redirect to="/product" />
          </Route>
        </Switch>
      </Router>
    </StoreProvider>
  );
};

export default App;
