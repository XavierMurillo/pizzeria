import React from "react";
import { NavbarComponent } from "./NavbarComponent";

const HeaderComponent = () => {
  return (
    <>
      <NavbarComponent />
      <img
        src="src\assets\img\header.png"
        style={{ width: "100%", height: "22vh" }}
      />
    </>
  );
};

export default HeaderComponent;
