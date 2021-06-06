import React from 'react';
import { Dropdown, Menu } from 'antd';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/hooks/useStore';
import { Link } from 'react-router-dom';

const UserDropdownMenu: React.FC = observer(() => {
  const { authStore } = useStore();

  if (authStore.user) {
    return (
      <Dropdown overlay={<Menu></Menu>} className="user-info">
        <div>{authStore.user.name}</div>
      </Dropdown>
    );
  }
  return <Link to="/oauth/sign-in">登录</Link>;
});

export default observer(UserDropdownMenu);
