import { Route, Link, Routes } from "react-router-dom";

import "./NavbarMobile.css";

import React, { useEffect, useState } from "react"

import About from "../About/About";
import MainPage from "../MainPage/MainPage";
import Projects from "../Projects/Projects";

import {NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from "reactstrap"

const NavbarMobile = () => {

    return (

        
    <div className="mainDivNavMob">
      {/* <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/projects">My Projects</Link></li>
                    <li><Link to="/Contact">Contact Me</Link></li>
                </ul>
            </div> */}

      <nav class="navbar navbar-expand-sm ">
        <div class="container-fluid">
          {/* <Link to="/">
                        <a class="nav-item" href="#">Home</a>
                    </Link> */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent ">
            <ul class="navbar-nav me-auto mb- mb-lg-0 ">
              <Link to="/">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page">
                    Home
                  </a>
                </li>
              </Link>

              <Link to="/projects">
                <li class="nav-item">
                  <a class="nav-link">My Projects</a>
                </li>
              </Link>

              <Link to="/about">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page">
                    About Me
                  </a>
                </li>
              </Link>

              {/* <Link to="/contact">
                            <li class="nav-item">
                            <a class="nav-link">Contact Me</a>
                            </li>
                        </Link> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarMobile;
