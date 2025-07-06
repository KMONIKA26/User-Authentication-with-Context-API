import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";

const Navbar = () => {
  const { isAuth, toggleAuth } = useContext(AuthContext);

  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <button onClick={toggleAuth}>
        {isAuth ? "Logout" : "Login"}
      </button>
    </nav>
  );
};

export default Navbar;
