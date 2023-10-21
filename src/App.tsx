import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Layout, Menu, MenuProps, theme } from 'antd';

const { Header, Content, Footer } = Layout;


const items: MenuProps['items'] = [
  {
    label: <Link to={"/"}>Homepage</Link>,
    key: "homepage"
  },
  {
    label: <Link to={"/blogs"}>Blogs</Link>,
    key: "blogs"
  },
  {
    label: <Link style={{float: 'right'}} to={"/login"}>Login</Link>,
    key: "login"
  }
]

function App() {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout">
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        items={items}
      />
    </Header>
    <Content style={{ padding: '50px 50px' }}>
      <div className="site-layout-content" style={{ background: colorBgContainer, padding: "30px 0px" }}>
        <Outlet />
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Lumixus @ {new Date().getFullYear()}</Footer>
  </Layout>
  );
}

export default App;
