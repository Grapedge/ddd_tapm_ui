import { AppLayout } from '@/layouts';
import { observer } from 'mobx-react-lite';
import { Route, Switch } from 'react-router';
import HomeMenu from './HomeMenu';
import MyProducts from './MyProducts';

const Home: React.FC = () => {
  return (
    <AppLayout sider={<HomeMenu />}>
      <Switch>
        <Route path="/" exact>
          <MyProducts />
        </Route>
        <Route path="/workbench" exact>
          工作台
        </Route>
      </Switch>
    </AppLayout>
  );
};

export default observer(Home);
