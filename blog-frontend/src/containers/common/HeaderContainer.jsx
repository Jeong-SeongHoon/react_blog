import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/common/Header';
import { logout } from '../../modules/user';

const HeaderContainer = () => {
  // state, dispatch
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();

  // event
  const onLogout = () => {
    dispatch(logout());
  };
  return <Header user={user} onLogout={onLogout}></Header>;
};

export default HeaderContainer;
