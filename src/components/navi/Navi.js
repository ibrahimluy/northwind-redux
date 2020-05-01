import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import CartSummary from "../cart/CartSummary";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======

>>>>>>> 74f4b6817bbcbefa34e3344f32c8d521e61868dd

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
<<<<<<< HEAD
        <NavbarBrand>
          <Link to="/">Northwind Mağazası</Link>
        </NavbarBrand>
=======
        <NavbarBrand href="/">reactstrap</NavbarBrand>
>>>>>>> 74f4b6817bbcbefa34e3344f32c8d521e61868dd
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
<<<<<<< HEAD
              <NavLink>
                <Link to="/saveproduct">Ürün ekle</Link>
              </NavLink>
            </NavItem>

=======
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
>>>>>>> 74f4b6817bbcbefa34e3344f32c8d521e61868dd
            <CartSummary></CartSummary>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default Navi;
