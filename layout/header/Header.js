import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="topbar shadow" id="top">
      <div className="header1 po-relative bg-light">
        <Container>
          <Navbar className="navbar-expand-lg h1-nav">
            <NavbarBrand href="#">
              <img src="/images/white-text.png" alt="wrapkit" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle}>
              <span className="ti-menu"></span>
            </NavbarToggler>
            <Collapse isOpen={isOpen} navbar id="header1">
              <Nav
                navbar
                className="navbar-nav-hover ml-auto mt-2 mt-lg-0 meta-menu"
              >
                <NavItem className="active">
                  <Link href="/" passHref>
                    <NavLink>Home</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/about" passHref>
                    <NavLink>About Us</NavLink>
                  </Link>
                </NavItem>
                {/* <NavItem>
                  <NavLink href="#">Products</NavLink>
                </NavItem> */}
                {/* <NavItem>
                  <NavLink href="/services">Services</NavLink>
                </NavItem> */}
                <UncontrolledDropdown nav className="link-menu" inNavbar>
                  <DropdownToggle nav>Services</DropdownToggle>
                  <DropdownMenu
                    className="b-none animated fadeInUp shadow"
                    right
                  >
                    <DropdownItem>
                      <Link href="/services">Offered Services</Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link href="/services/professionalServices">
                        Professional Services
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <Link href="/contact" passHref>
                    <a className="btn btn-info">Contact Us</a>
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};

export default Header;
