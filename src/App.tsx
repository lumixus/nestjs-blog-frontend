import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Layout, Menu, theme } from 'antd';

const { Header, Content, Footer } = Layout;



function App() {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout">
    <Header style={{ display: 'flex', alignItems: 'center' }}>
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        items={[{
          label: <Link to={"/blogs"}>Blogs</Link>,
          key: "blogs"
        }]}
      />
    </Header>
    <Content style={{ padding: '50px 50px' }}>
      <div className="site-layout-content" style={{ background: colorBgContainer, padding: "30px 0px" }}>
        <Outlet />
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Emir Taşkın @{new Date().getFullYear()}</Footer>
  </Layout>
  );
}

export default App;
