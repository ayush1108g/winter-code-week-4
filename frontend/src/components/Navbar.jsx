import classes from "./Navbar.module.css";
import { scrollToHandler } from "../store/scrollTo";
// import { useNavigate } from "react-router";
// import { useLocation } from "react-router-dom";
// import { motion } from "framer-motion";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { FaShoppingCart } from "react-icons/fa";
// import SidebarContext from "../store/sidebar-context";
// import { useContext, useEffect, useState } from "react";
// import Sidebar from "./SideBar";
// import axios from 'axios';
// import { ToLink } from '../App';
// import { useRef } from "react";

const Navbar = () => {


  return (<>
    <nav className={classes.navbar}>
      <ul>
        <li>Home</li>
        <li>Courses</li>
        <li>Contact us</li>
        <li onClick={() => { scrollToHandler('teampage') }}>Our team</li>
        <li>login</li>
      </ul>
    </nav>
  </>
  );
};
export default Navbar;
