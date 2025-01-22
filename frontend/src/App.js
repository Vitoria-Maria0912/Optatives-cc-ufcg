import React, { useState } from 'react';
import { HomeOutlined, UserOutlined, BookOutlined, UsbOutlined, ReloadOutlined, ReadOutlined, SunOutlined, BulbOutlined } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb } from 'antd';
import './style.css';

const App = () => {

  const { Header, Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;
  
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => { setCollapsed(collapsed); };

  return (
      <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" >
              <span className="logo-T">T</span>
              <span className="logo-text">rilharei</span>
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="vertical">
              <Menu.Item key="home" icon={<HomeOutlined />}>Home</Menu.Item>
              <Menu.Item key="2" icon={<BulbOutlined />}>About</Menu.Item>
              <SubMenu key="sub1" icon={<UserOutlined />} title="Usuário">
                <Menu.Item key="11">Criar novo usuário</Menu.Item>
                <Menu.Item key="12">Criar login</Menu.Item>
                <Menu.Item key="13">Editar usuário</Menu.Item>
                <Menu.Item key="14">Visualizar usuários</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<UsbOutlined />} title="Disciplina">
                <Menu.Item key="21">Criar disciplina</Menu.Item>
                <Menu.Item key="22">Apagar disciplina</Menu.Item>
                <Menu.Item key="23">Editar disciplina</Menu.Item>
                <Menu.Item key="24">Visualizar todas asdisciplinas</Menu.Item>
                <Menu.Item key="25">Visualizar disciplina</Menu.Item>                
              </SubMenu>
              <SubMenu key="sub3" icon={<BookOutlined />} title="Planejamento">
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
                <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design © 2018 Created by Ant UED</Footer>
          </Layout>
      </Layout>
  );
};

export default App;
