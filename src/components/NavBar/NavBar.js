import React from "react";
import { Link } from "react-router-dom";
import { Header, Navul, NavLinks } from "./NavStyle";

const Navl = {
  textDecoration: "none",
  outline: "none",
};

function NavBar() {
  return (
    <div>
      <Header>
        <p>Breaking Bad</p>
        <Navul>
          <Link style={Navl} to="/">
            <NavLinks>Home</NavLinks>
          </Link>
          <Link style={Navl} to="/about">
            <NavLinks>About</NavLinks>
          </Link>
          <Link style={Navl} to="about ">
            <NavLinks>Contact</NavLinks>
          </Link>
        </Navul>
      </Header>
    </div>
  );
}

export default NavBar;
