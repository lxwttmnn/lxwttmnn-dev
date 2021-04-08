import React, { useState } from "react"
import {
  Container,
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap"

import { Link } from "gatsby"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import logo from "../images/logo-dark-theme.png"

export default function Header({ location }) {
  const [collapsed, setCollapsed] = useState(false)
  const { navigationLinks } = useSiteMetadata()

  function clickHandler() {
    setCollapsed(!collapsed)
  }

  return (
    <Navbar dark expand="md">
      <Container fluid>
        <NavbarBrand className="mr-auto">Alexander Wittmann</NavbarBrand>
        <NavbarToggler onClick={clickHandler} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="ml-auto" navbar>
            {navigationLinks.map(navigationLink => (
              <NavItem
                key={navigationLink.name}
                className={
                  location.pathname === navigationLink.url ? "active" : ""
                }
              >
                <Link to={navigationLink.url} className="nav-link">
                  {navigationLink.name}
                </Link>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}
