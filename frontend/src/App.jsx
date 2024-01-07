import Footer from "./components/footer/mainFooter.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Route, Routes, useLocation, HashRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import { useContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SidebarContext from "./store/context/sidebar-context";
import SidebarContextProvider from "./store/context/sidebarContextProvider";
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
import { authActions } from "./store/redux/auth.js";

export const ToLink = "https://education-management.onrender.com";
// export const ToLink = "http://127.0.0.1:8000";

function RoutesWithAnimation() {
  const location = useLocation();
  //console.log(location);
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        <Route path="/forgotpassword" element={<ForgotPassPage />} />
        <Route path="/forgotpassword/:id" element={<ForgotPassIDPage />}
        />
        <Route path="/forgotpassword/:id/confirm" element={<ForgotPassConfirmPage />}
        />
        <Route path="/team" element={<TeamPage />} />
        {/* <Route path="/course/:id" element={<CourseDetail />} /> */}
        <Route path="/playlist/:playlistid" element={<PlaylistPage />} />
        <Route path="/" element={<HomePage />} />
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

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn')) {
      dispatch(authActions.login());
    }
  }, [dispatch]);

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
  };
  const forgotpassHandler = () => {
    setforgotpassState(true);
    navigate("forgotpassword");
    setTimeout(() => {
      scrollToHandler("forgotPasswordPage", 100);
    }, 100)
  }
  return (
    <>
      <div onClick={closeSidebarHandler}  >
        <div className={`h2 d-flex align-item-center justify-content-center `} style={{ marginBottom: '0px', backgroundImage: 'linear-gradient(to bottom, #ffff, #2470a2)' }}>
          𝓔𝓭𝓾-𝓣𝓮𝓬𝓱
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
