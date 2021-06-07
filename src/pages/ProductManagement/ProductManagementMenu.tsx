import { Menu } from 'antd';
import { useLocation, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import { FileTextOutlined, ProjectOutlined } from '@ant-design/icons';

const ProductManagementMenu: React.FC = () => {
  const { url } = useRouteMatch();
  const location = useLocation();
  const selectedKey = location.pathname.replace(url, '').split('/')[1] || '/';
  return (
    <Menu selectedKeys={[selectedKey]}>
      <Menu.Item key="/" icon={<ProjectOutlined />}>
        <Link to={`${url}`}>项目概览</Link>
      </Menu.Item>
      <Menu.Item key="backlog" icon={<FileTextOutlined />}>
        <Link to={`${url}/backlog`}>待办事项</Link>
      </Menu.Item>
      <Menu.Item key="repos" icon={<FileTextOutlined />}>
        <Link to={`${url}/repos`}>代码仓库</Link>
      </Menu.Item>
      <Menu.Item key="wiki" icon={<FileTextOutlined />}>
        <Link to={`${url}/wiki`}>Wiki 文档</Link>
      </Menu.Item>
      <Menu.Item key="daily" icon={<FileTextOutlined />}>
        <Link to={`${url}/daily`}>项目日报</Link>
      </Menu.Item>
      <Menu.Item key="setting" icon={<FileTextOutlined />} disabled>
        <Link to={`${url}/setting`}>项目设置</Link>
      </Menu.Item>
    </Menu>
  );
};

export default ProductManagementMenu;
