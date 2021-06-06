import React from 'react';
import { Layout } from 'antd';

const AppContent: React.FC = (props) => (
  <Layout.Content className="app-content">{props.children}</Layout.Content>
);

export default AppContent;
