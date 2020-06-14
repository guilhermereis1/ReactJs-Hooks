import React, { useState } from "react";
import { Layout } from "antd";

export default function MenuLinks({ children }) {
  const { Sider } = Layout;
  const [collapsed, actionSider] = useState(false);

  return (
    <Sider
      width="250"
      collapsible
      collapsed={collapsed}
      onCollapse={() => actionSider(collapsed ? false : true)}
    >
      {children}
    </Sider>
  );
}
