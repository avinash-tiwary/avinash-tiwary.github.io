import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineLaptop } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
      // eslint-disable-next-line
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#project"
        onClick={() => setActiveNav("#project")}
        className={activeNav === "#project" ? "active" : ""}
      >
        <AiOutlineLaptop />
      </a>
      <a
        href="#timeline"
        onClick={() => setActiveNav("#timeline")}
        className={activeNav === "#timeline" ? "active" : ""}
      >
        <BiTimeFive />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
