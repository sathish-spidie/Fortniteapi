import React from "react";
import { Link } from "react-router-dom";

export const NavStyle = {
  textDecoration: "none",
  color: "black"
};
const Logostyle = {
  width: "15vw"
};
export const Nav = () => {
  return (
    <nav>
      <Link style={NavStyle} to="/">
        <img
          style={Logostyle}
          alt="logo"
          src="https://uploads.codesandbox.io/uploads/user/2b050b8e-9dee-419a-b433-b32c946d159f/_OxI-8Jv1AAzJ0FRKzBnz7SKwfuKy7.png"
        />
      </Link>
      <ul>
        <Link style={NavStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={NavStyle} to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
};
