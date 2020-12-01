import React from "react";
import { Link } from "react-router-dom";
import { Header, Navul, NavLinks } from "./NavStyle";


function NavBar() {
  return (
    <div>
      <Header>
        <p>BBCasts</p>
        <Navul>
          <Link className="link"  to="/">
            <NavLinks>Home</NavLinks>
          </Link>
          <Link className="link" to="/contact">
            <NavLinks>Contact</NavLinks>
          </Link>
        </Navul>
      </Header>
    </div>
  );
}

export default NavBar;
