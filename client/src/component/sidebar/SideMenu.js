import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const SideMenu = (props) => {
  // const [collapsed, setCollapsed] = React.useState(false);
  return (
    <>
      {/* <div style={{ display: "flex", height: "100%", minHeight: "400px" }}> */}
      <Sidebar collapsed={props.collapsed} ollapsedWidth="60px">
        <Menu
          menuItemStyles={{
            button: {
              // the active class will be added automatically by react router
              // so we can use it to style the active menu item
              [`&.active`]: {
                backgroundColor: "#13395e",
                color: "#b6c8d9",
              },
            },
          }}
        >
          <MenuItem component={<Link to="/" />}>logo</MenuItem>
          <SubMenu label="Animals">
            <MenuItem component={<Link to="/animal" />}>animalList</MenuItem>
            <MenuItem component={<Link to="/documentation" />}>
              Line charts
            </MenuItem>
          </SubMenu>
          <MenuItem component={<Link to="/birds" />}>Bird'ss</MenuItem>
          <MenuItem component={<Link to="/trees" />}>Tree's </MenuItem>
          <MenuItem component={<Link to="/fishes" />}>Fishe's</MenuItem>
        </Menu>
      </Sidebar>
      {/* <main style={{ padding: 10 }}>
        <button className="sb-button" onClick={() => setCollapsed(!collapsed)}>
          Collapse
        </button>
        <div>{props.children}</div>
      </main> */}
      {/* </div> */}
    </>
  );
};

export default SideMenu;
