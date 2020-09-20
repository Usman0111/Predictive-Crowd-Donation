import React from "react";
import { Nav, NavItem, NavLink, Card } from "reactstrap";
import classnames from "classnames";

const Menu = (props) => {
  const { activeTab, toggle } = props;
  return (
    <Card>
      <div style={{ height: "92vh" }}>
        <h4 className="ml-3 mt-3 ">{props.name}</h4>
        <Nav className="p-2 " pills vertical>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              Browse Donation Groups
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </Card>
  );
};

export default Menu;
