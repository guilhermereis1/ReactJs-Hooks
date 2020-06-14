import React, { Component } from "react";
import { Layout } from "antd";
const { Footer } = Layout;

class FooterPage extends Component {
  render() {
    return (
      <Footer style={{ textAlign: "center" }}>{this.props.children}</Footer>
    );
  }
}

export default FooterPage;
