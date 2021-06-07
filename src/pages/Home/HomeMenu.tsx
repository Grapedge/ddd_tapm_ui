import { Menu } from 'antd';
import { useLocation, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import { FileTextOutlined, ProjectOutlined } from '@ant-design/icons';

const HomeMenu: React.FC = () => {
  const location = useLocation();
  const { url } = useRouteMatch();

  return (
    <Menu selectedKeys={[location.pathname]}>
      <Menu.Item key={`${url}`} icon={<ProjectOutlined />}>
        <Link to={url}>我的项目</Link>
      </Menu.Item>
      <Menu.Item key={`${url}/workbench`} icon={<FileTextOutlined />}>
        <Link to={`${url}/workbench`}>工作台</Link>
      </Menu.Item>
    </Menu>
  );
};

export default HomeMenu;
