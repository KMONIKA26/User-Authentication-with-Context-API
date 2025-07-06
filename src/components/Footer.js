import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";

const Footer = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <footer style={{ padding: "10px", background: "#ddd" }}>
      {isAuth ? "Welcome, User" : "Please log in"}
    </footer>
  );
};

export default Footer;
