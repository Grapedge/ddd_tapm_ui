import { AppLayout } from '@/layouts';
import { observer } from 'mobx-react-lite';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router';
import CodeRepositories from './CodeRepositories';
import ProductMenu from './ProductManagementMenu';
import ProductOverview from './ProductOverview';

const Product: React.FC = () => {
  const { url } = useRouteMatch();
  return (
    <AppLayout sider={<ProductMenu />}>
      <Switch>
        <Route path={`${url}`} exact>
          <ProductOverview />
        </Route>
        <Route path={`${url}/backlog`} exact>
          待办事项
        </Route>
        <Route path={`${url}/sprint`} exact>
          冲刺
        </Route>
        <Route path={`${url}/repos`} exact>
          <CodeRepositories />
        </Route>
        <Route path={`${url}/wiki`} exact>
          Wiki
        </Route>
        <Route path={`${url}/daily`} exact>
          日报
        </Route>
        <Route path={`${url}/setting`} exact>
          设置
        </Route>
        <Route>
          <Redirect to="/404" />
        </Route>
      </Switch>
    </AppLayout>
  );
};

export default observer(Product);
