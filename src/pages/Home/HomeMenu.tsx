import { Menu } from 'antd';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { FileTextOutlined, ProjectOutlined } from '@ant-design/icons';

const HomeMenu: React.FC = () => {
  const location = useLocation();
  return (
    <Menu selectedKeys={[location.pathname]}>
      <Menu.Item key="/" icon={<ProjectOutlined />}>
        <Link to="/">我的项目</Link>
      </Menu.Item>
      <Menu.Item key="/workbench" icon={<FileTextOutlined />}>
        <Link to="/workbench">工作台</Link>
      </Menu.Item>
    </Menu>
  );
};

export default HomeMenu;
