import CourseDetail from "./components/course-detail/course-detail.jsx";
import Footer from "./components/footer/mainFooter.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Route, Routes, useLocation, HashRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import { useContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SidebarContext from "./store/sidebar-context";
import SidebarContextProvider from "./store/sidebarContextProvider";
import classes from "./App.module.css";

// import Card from "./components/Card.jsx";
// import CourseDetail from "./components/course-detail";
// import SideBar from "./components/SideBar";
// import LoginPage from "./pages/LoginPage";
// import CategoriesMain from "./components/categories/categoriesMain";
// import SignUpForm from './components/signup1'

import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import Errorpage from "./pages/Errorpage";
import TeamPage from "./pages/teamPage";
import ForgotPassPage from "./pages/ForgotPass/ForgotPassPage";
import ForgotPassIDPage from "./pages/ForgotPass/ForgotPassIDPage";
import ForgotPassConfirmPage from "./pages/ForgotPass/ForgotPassConfirmPage";
import PlaylistPage from './pages/playlistPage.jsx'
import IMAGE1 from "./store/IMAGE1.jpg";
import { useNavigate } from "react-router-dom";
import { scrollToHandler } from "./store/scrollTo.js";
import { authActions } from "./store/auth.js";

// export const ToLink = "https://ecommerce-web-lwxy.onrender.com";
export const ToLink = "http://127.0.0.1:8000";

function RoutesWithAnimation() {
  const location = useLocation();


  console.log(location);
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        {/* <Route path="/login" element={<LoginPage />} /> */}
        <Route path="/forgotpassword" element={<ForgotPassPage />} />
        <Route path="/forgotpassword/:id" element={<ForgotPassIDPage />}
        />
        <Route path="/forgotpassword/:id/confirm" element={<ForgotPassConfirmPage />}
        />
        {/* <Route path="/signup" element={<SignupPage />} /> */}
        <Route path="/team" element={<TeamPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/playlist/:playlistid" element={<PlaylistPage />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </AnimatePresence>
  );
}

function MainComp() {
  const dispatch = useDispatch();
  const sidebarCtx = useContext(SidebarContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [forpassState, setforgotpassState] = useState(false);
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const isLoggedIn = isAuth;

  console.log(isAuth);
  // const [isLoggedIn, setIsloggedIn] = useState(localStorage.getItem('isLoggedIn'));

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn')) {
      dispatch(authActions.login());
    }
  }, []);

  useEffect(() => {
    const x = location.pathname.split('/');
    if (location.pathname === '/forgotpassword' || x[1] === 'forgotpassword') {
      setforgotpassState(true);
    }
    else if (location.pathname === '/') {
      setforgotpassState(false);
    }
  }, [location.pathname])

  const closeSidebarHandler = () => {
    sidebarCtx.closeSidebar();
    console.log("clicked");
  };
  const forgotpassHandler = () => {
    setforgotpassState(true);
    console.log('123321');
    navigate("forgotpassword");
    setTimeout(() => {
      scrollToHandler("forgotPasswordPage", 100);
    }, 100)
  }
  return (
    <>
      <div onClick={closeSidebarHandler}  >
        <div className={`h2 d-flex align-item-center justify-content-center `} style={{ marginBottom: '0px', backgroundImage: 'linear-gradient(to bottom, #ffff, #2470a2)' }}>
          Edu-Tech
        </div>
        <Navbar />
        <div id='toppage'>
          <img src={IMAGE1} alt="IMAGE1" className="img-fluid" style={{ width: '100%', height: "80vh", overflowX: "clip" }} />
        </div>
        {!isLoggedIn && !forpassState && <SignupPage onChooseForgotPass={() => { forgotpassHandler(); }} />}
        <RoutesWithAnimation />
      </div>
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <SidebarContextProvider>
        <MainComp />

        <Footer></Footer>
      </SidebarContextProvider>
    </HashRouter>
  );
}
export default App;
