import { AppLayout } from '@/layouts';
import { observer } from 'mobx-react-lite';
import { Route, Switch } from 'react-router';
import HomeMenu from './HomeMenu';
import MyProducts from './MyProducts';
import Workbench from './Workbench';

const Home: React.FC = () => {
  return (
    <AppLayout sider={<HomeMenu />}>
      <Switch>
        <Route path="/" exact>
          <MyProducts />
        </Route>
        <Route path="/workbench" exact>
          <Workbench />
        </Route>
      </Switch>
    </AppLayout>
  );
};

export default observer(Home);
