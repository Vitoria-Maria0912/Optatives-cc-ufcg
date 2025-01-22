import React, { useState } from 'react';
import { HomeOutlined, UserOutlined, BookOutlined, UsbOutlined, BulbOutlined } from '@ant-design/icons';
import { Menu, Layout } from 'antd';
import { Route, Routes, useNavigate } from "react-router-dom";
import * as Main from './components/layout/CenterMain.js'
import './style.css';

const App = () => {

  const { Header, Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;
  
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => { setCollapsed(collapsed); };

  const navigate = useNavigate();
  
  return (
      <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" >
              <span className="logo-T">T</span>
              <span className="logo-text">rilharei</span>
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="vertical">
              <Menu.Item key="home" icon={<HomeOutlined />} onClick={() => navigate('/')}>Home</Menu.Item>
              <Menu.Item key="2" icon={<BulbOutlined />} onClick={() => navigate('/about')}>About</Menu.Item>

              <SubMenu key="sub1" icon={<UserOutlined />} title="Usuário" onClick={() => navigate('/users')}>
                <Menu.Item key="11" onClick={() => navigate('/create')}>Criar novo usuário</Menu.Item>
                <Menu.Item key="12">Criar login</Menu.Item>
                <Menu.Item key="13">Editar usuário</Menu.Item>
                <Menu.Item key="14">Visualizar usuários</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<UsbOutlined />} title="Disciplina" onClick={() => navigate('/disciplines')}>
                <Menu.Item key="21">Criar nova disciplina</Menu.Item>
                <Menu.Item key="22">Apagar disciplina</Menu.Item>
                <Menu.Item key="23">Editar disciplina</Menu.Item>
                <Menu.Item key="24">Visualizar todas as disciplinas</Menu.Item>
                <Menu.Item key="25">Visualizar disciplina</Menu.Item>                
              </SubMenu>
              <SubMenu key="sub3" icon={<BookOutlined />} title="Planejamento" onClick={() => navigate('/planning')}>
                <Menu.Item key="31">Criar planejamento</Menu.Item>
                <Menu.Item key="32">Salvar planejamento</Menu.Item>
                <Menu.Item key="33">Editar planejamento</Menu.Item>
                <Menu.Item key="34">Apagar planejamento</Menu.Item>
              </SubMenu>
          </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
                <Routes>
                    <Route path="/" exact element={<Main.Home/>} />
                    <Route path="/about" exact element={<Main.About/>} />
                    <Route path="/users" exact element={<Main.UserLinks/>} />
                    <Route path="/auth/login" exact element={<Main.LoginLinks/>} />
                    <Route path="/disciplines" exact element={<Main.DisciplineLinks/>} />
                    <Route path="/planning" exact element={<Main.PlanningLinks/>} />
                </Routes>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design © 2018 Created by Ant UED</Footer>
          </Layout>
      </Layout>
  );
};

export default App;
