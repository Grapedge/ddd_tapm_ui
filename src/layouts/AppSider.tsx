import React from 'react';
import { Layout } from 'antd';

const AppSider: React.FC = (props) => {
  return (
    <Layout.Sider theme="light" className="app-sider">
      {props.children}
    </Layout.Sider>
  );
};

export default AppSider;
