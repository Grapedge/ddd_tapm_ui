import { AppLayout } from '@/layouts';
import { observer } from 'mobx-react-lite';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router';
import HomeMenu from './HomeMenu';
import MyProducts from './MyProducts';
import Workbench from './Workbench';

const Home: React.FC = () => {
  const { url } = useRouteMatch();
  return (
    <AppLayout sider={<HomeMenu />}>
      <Switch>
        <Route path={`${url}`} exact>
          <MyProducts />
        </Route>
        <Route path={`${url}/workbench`} exact>
          <Workbench />
        </Route>
        <Route>
          <Redirect to="/404" />
        </Route>
      </Switch>
    </AppLayout>
  );
};

export default observer(Home);
