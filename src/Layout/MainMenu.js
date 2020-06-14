import React, { Component } from "react";
import { Layout, Menu } from "antd";
import MenuLinks from "./MenuLinks";
import FooterPage from "./FooterPage";
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

class MainMenu extends Component {
  render() {
    const { Content } = Layout;
    const { SubMenu } = Menu;
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <MenuLinks>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>

            <Menu.Item key="2" icon={<DesktopOutlined />}>
              <Link to="/contacts">Contatos</Link>
            </Menu.Item>

            <Menu.Item key="3" icon={<DesktopOutlined />}>
              <Link to="/about">Sobre</Link>
            </Menu.Item>

            <SubMenu key="sub1" icon={<UserOutlined />} title="Users">
              <Menu.Item key="4">Tom (tom@tom.com)</Menu.Item>
              <Menu.Item key="5">Bill (bill@bill.com)</Menu.Item>
              <Menu.Item key="6">Alex (alex@alex.com)</Menu.Item>
            </SubMenu>
          </Menu>
        </MenuLinks>
        <Layout className="site-layout">
          <Content style={{ margin: "10px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {this.props.children}
            </div>
          </Content>
          <FooterPage>App - React - Hooks</FooterPage>
        </Layout>
      </Layout>
    );
  }
}

export default MainMenu;
