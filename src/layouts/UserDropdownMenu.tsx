import React from 'react';
import { Dropdown, Menu } from 'antd';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/hooks/useStore';
import { Link } from 'react-router-dom';

const UserDropdownMenu: React.FC = () => {
  const { authStore } = useStore();
  return (
    <>
      {authStore.user && (
        <Dropdown overlay={<Menu></Menu>} className="app-header__user-info">
          <div>{authStore.user.name}</div>
        </Dropdown>
      )}
      {!authStore.user && <Link to="/oauth/sign-in" className="app-header__sign-in">登录</Link>}
    </>
  );
};

export default observer(UserDropdownMenu);
