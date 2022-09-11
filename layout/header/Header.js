import React, { useState } from "react";
import Image from "next/image";
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
import logo from "../../assets/images/logos/white-text.png";

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
              <Image src={logo} alt="wrapkit" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle}>
              <span className="ti-menu text-white"></span>
            </NavbarToggler>
            <Collapse isOpen={isOpen} navbar id="header1">
              <Nav
                navbar
                className="navbar-nav-hover ml-auto mt-2 mt-lg-0 meta-menu"
              >
                <NavItem className="active">
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/about">About Us</NavLink>
                </NavItem>
                {/* <NavItem>
                  <NavLink href="#">Products</NavLink>
                </NavItem> */}
                {/* <NavItem>
                  <NavLink href="/services">Services</NavLink>
                </NavItem> */}
                <UncontrolledDropdown nav>
                  <DropdownToggle nav>Services</DropdownToggle>
                  <DropdownMenu
                    className="b-none animated fadeInUp shadow"
                    right
                  >
                    <DropdownItem>
                      <Link href="/services/professionalServices">
                        Professional Services
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <a className="btn btn-info" href="/contact">
                    Contact Us
                  </a>
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
