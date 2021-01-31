import React from 'react';
import { Helmet } from 'react-helmet-async';
import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../containers/auth/LoginForm';

const LoginPage = () => {
  console.log('LoginPage');
  return (
    <>
      <Helmet>
        <title>REACTERS - LOGIN</title>
      </Helmet>
      <AuthTemplate>
        <LoginForm></LoginForm>
      </AuthTemplate>
    </>
  );
};

export default LoginPage;
