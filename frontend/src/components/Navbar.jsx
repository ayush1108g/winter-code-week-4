import classes from "./Navbar.module.css";
import { scrollToHandler } from "../store/scrollTo";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import SidebarContext from "../store/context/sidebar-context";
import { useContext } from "react";
import Sidebar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/redux/auth";
const Navbar = () => {
  const sidebarCtx = useContext(SidebarContext);
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();
  const scroll = (id, offset) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToHandler(id, offset);
      }, 500)
    } else {
      scrollToHandler(id, offset);
    }
  }
  const sidebarHandler = (e) => {
    e.stopPropagation();
    sidebarCtx.toggleSidebar();
  };
  const logoutHandler = () => {
    localStorage.clear();
    dispatch(authActions.logout());
  }

  return (<>
    {sidebarCtx.isSidebarOpen && <Sidebar />}
    <nav className={classes.navbar}>
      <ul className="d-flex d-sm-none" onClick={(e) => sidebarHandler(e)} >
        <li>  {<GiHamburgerMenu />} </li> &nbsp;Menu
      </ul>
      <ul className="d-none d-sm-flex">
        <li className={classes.left}></li>
        <li onClick={() => { scroll('toppage', 0) }}>Home</li>
        {!isAuth && <li onClick={() => { scroll('login', 100) }}>Login</li>}
        <li onClick={() => { scroll("catagories", 100) }}>Courses</li>
        <li onClick={() => { scroll('teampage', 50) }}>Our team</li>
        <li onClick={() => { scroll("contact-us", 100) }}>Contact us</li>
        {isAuth && <li onClick={logoutHandler}>Logout</li>}
      </ul>
    </nav>
  </>
  );
};
export default Navbar;
