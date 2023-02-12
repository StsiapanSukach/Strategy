/* eslint-disable no-alert */
import React, { Suspense } from 'react';

import NormalizeStyles from './NormalizeStyles';
import BaseStyles from './BaseStyles';
import Toast from './Toast';
import Routes from './Routes';
import accessDenied from './assets/access_denied.png';

import './fontStyles.css';

const App = () => {
  const account = prompt('Login : ', '');
  const password = prompt('Password : ', '');

  if (account !== 'user' || password !== '1234') {
    return (
      <div
        style={{
          background: '#f9f6f6',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <img src={accessDenied} alt="Access Denied" />
      </div>
    );
  }

  return (
    <Suspense fallback="loading">
      <NormalizeStyles />
      <BaseStyles />
      <Toast />
      <Routes />
    </Suspense>
  );
};

export default App;
