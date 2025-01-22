import React, { useState } from 'react';
import { UserOutlined, TeamOutlined, DesktopOutlined, PieChartOutlined, FileOutlined } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb } from 'antd';
import './index.css';

const App = () => {

  const { Header, Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;
  
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  return (
      <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" >
              <span className="logo-T">T</span>
              <span className="logo-text">rilharei</span>
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
              </Menu.Item>
              <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="7">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="8" icon={<FileOutlined />}>
              File
              </Menu.Item>
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
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
      </Layout>
  );
};

export default App;
