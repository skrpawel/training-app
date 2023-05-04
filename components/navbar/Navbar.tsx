"use client";

import React, { useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import NavbarElement from "./NavbarElement";

const Navbar = () => {
  const ref = useRef(null);

  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="absolute w-full bg-black bg-opacity-40">
      <div className="flex text-[#FFFCF2] justify-between items-center w-full p-6">
        <h1 className="text-4xl font-bold text-[#EB5E28]">trainKEEPER.</h1>
        <ul className="hidden md:flex md:justify-end">
          <NavbarElement href="/" label="Home" onClick={() => {}} />
          <NavbarElement href="#sport" label="Sport types" />
          <NavbarElement href="/login" label="Login" />
          <NavbarElement href="/register" label="Sign Up" />
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <AiOutlineClose size={26} /> : <AiOutlineMenu size={26} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
