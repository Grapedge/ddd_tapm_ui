import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Home } from './pages/Home';
import { RootStore } from './stores/RootStore';
import { StoreProvider } from './stores/StoreContext';
import { Error404 } from './pages/Error';
import { ProductManagement } from './pages/ProductManagement';
import './App.scss';

const rootStore = new RootStore();

const App: React.FC = () => {
  return (
    <StoreProvider value={rootStore}>
      <Router>
        <Switch>
          <Route path="/p/:pid">
            <ProductManagement />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/404" exact>
            <Error404 />
          </Route>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/">
            <Redirect to="/404" />
          </Route>
        </Switch>
      </Router>
    </StoreProvider>
  );
};

export default App;
