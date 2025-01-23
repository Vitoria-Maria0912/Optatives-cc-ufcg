import React from 'react';
import { Breadcrumb } from 'antd';
import { Route, Routes } from 'react-router-dom';

const LoginService = () => {

  return (
    <div>
        <Breadcrumb>
          <Breadcrumb.Item>Login</Breadcrumb.Item>
        </Breadcrumb>
        <Routes>
            <Route path="/auth/login" element={<></>} />
        </Routes>
    </div>
  );
};

export default LoginService;
