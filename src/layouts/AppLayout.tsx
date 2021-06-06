import React from 'react';
import { Layout } from 'antd';
import AppHeader from './AppHeader';
import AppSider from './AppSider';
import AppContent from './AppContent';

export type AppLayoutProps = {
  sider?: React.ReactNode;
};

const AppLayout: React.FC<AppLayoutProps> = (props) => {
  return (
    <Layout className="app">
      <AppHeader />
      <Layout hasSider={!!props.sider}>
        {props.sider && <AppSider>{props.sider}</AppSider>}
        <AppContent>{props.children}</AppContent>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
