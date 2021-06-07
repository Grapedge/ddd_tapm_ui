import React from 'react';
import { Layout } from 'antd';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/hooks/useStore';
import UserDropdownMenu from './UserDropdownMenu';
import { Link } from 'react-router-dom';

const AppHeader: React.FC = () => {
  const { uiStore } = useStore();
  return (
    <Layout.Header className="app-header">
      <img
        src="https://www.sc.sdu.edu.cn/images/favicon.ico"
        alt="SDU"
        className="app-header__logo"
      />
      <Link to="/" className="app-header__title">
        {uiStore.pageTitle}
      </Link>
      <UserDropdownMenu />
    </Layout.Header>
  );
};

export default observer(AppHeader);
