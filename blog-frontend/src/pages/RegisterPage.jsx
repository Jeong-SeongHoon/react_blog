import React from 'react';
import { Helmet } from 'react-helmet-async';
import AuthForm from '../components/auth/AuthForm';
import AuthTemplate from '../components/auth/AuthTemplate';
import RegisterForm from '../containers/auth/RegisterForm';

const RegisterPage = () => {
  console.log('RegisterPage');
  return (
    <>
      <Helmet>
        <title>REACTERS - REGISTER</title>
      </Helmet>
      <AuthTemplate>
        <RegisterForm></RegisterForm>
      </AuthTemplate>
    </>
  );
};

export default RegisterPage;
