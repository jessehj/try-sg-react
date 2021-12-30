import React from "react";
import MenuLayout from "./style";
import MenuLinks from "./MenuLinks";

const Menu: React.FC = function Menu() {
  return (
    <MenuLayout>
      <MenuLinks />
    </MenuLayout>
  );
};
export default Menu;
