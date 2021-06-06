import React from 'react';
import { Layout } from 'antd';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/hooks/useStore';
import UserDropdownMenu from './UserDropdownMenu';

const AppHeader: React.FC = () => {
  const { uiStore } = useStore();
  return (
    <Layout.Header className="app-header">
      <div className="app-title">{uiStore.pageTitle}</div>
      <UserDropdownMenu />
    </Layout.Header>
  );
};

export default observer(AppHeader);
