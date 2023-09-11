import React, { useState } from "react";
import Layout from "../../component/layout/Layout";
import SideMenu from "../../component/sidebar/SideMenu";
import NavList from "../../component/navList/NavList";
import "./InnerLayout.scss";

const InnerLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Layout>
        <NavList />
        <div className="inner-layout">
          <SideMenu collapsed={collapsed} />
          <main style={{ width: "100%" }}>
            <hr />
            <button
              className="sb-button"
              onClick={() => setCollapsed(!collapsed)}
            >
              Collapse
            </button>
            <hr />
            <div>{children}</div>
          </main>
        </div>
      </Layout>
    </>
  );
};

export default InnerLayout;
