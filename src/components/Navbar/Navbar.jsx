import { Route, Link, Routes } from "react-router-dom";

// import "./Navbar.css";

import React, { useEffect, useState } from "react"

import About from "../About/About";
import MainPage from "../MainPage/MainPage";
import Projects from "../Projects/Projects";
import NavbarMobile from "./NavbarMobile";

import {NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from "reactstrap"
import NavbarNotMobile from "./NavbarNotMobile";

const Navbar = () => {

      
      const [windowDimension, setWindowDimension] = useState(null);
    
      useEffect(() => {
        setWindowDimension(window.innerWidth);
      }, []);
    
      useEffect(() => {
        function handleResize() {
          setWindowDimension(window.innerWidth);
        }
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    
      let isMobile;
      if (windowDimension <= 991) {
          isMobile = true
      } else {
          isMobile = false
      };


    return (
        <div>
            {
                isMobile ? 
                <NavbarMobile /> :
                <NavbarNotMobile />
            }
        </div>
  );
};

export default Navbar;
