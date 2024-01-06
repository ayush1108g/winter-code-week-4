import classes from "./App.module.css";
import CourseDetail from "./components/course-detail/course-detail.jsx";
import Footer from "./components/footer/mainFooter.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useLocation, HashRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
// import SideBar from "./components/SideBar";
import { useContext } from "react";
import SidebarContext from "./store/sidebar-context";

import SidebarContextProvider from "./store/sidebarContextProvider";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import Errorpage from "./pages/Errorpage";
import TeamPage from "./pages/teamPage";
import ForgotPassPage from "./pages/ForgotPass/ForgotPassPage";
import ForgotPassIDPage from "./pages/ForgotPass/ForgotPassIDPage";
import ForgotPassConfirmPage from "./pages/ForgotPass/ForgotPassConfirmPage";
import IMAGE1 from "./store/IMAGE1.jpg";
import SignUpForm from './components/signup1'
export const ToLink = "https://ecommerce-web-lwxy.onrender.com";
// export const ToLink = "http://127.0.0.1:8000";
export const FromLink = "https://swiftshop-ecommerce.netlify.app/#/";

function RoutesWithAnimation() {
  const location = useLocation();
  console.log(location);
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/forgotpassword" element={<ForgotPassPage />} />
        <Route
          path="/login/forgotpassword/:id"
          element={<ForgotPassIDPage />}
        />
        <Route
          path="/login/forgotpassword/:id/confirm"
          element={<ForgotPassConfirmPage />}
        />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </AnimatePresence>
  );
}

// function App() {
//   const screenWidth = window.innerWidth;
//   return (
//     <HashRouter>
//       <div>
//         <div
//           className="d-none d-lg-block"
//           style={{
//             position: "fixed",
//             width: "18rem",
//             backgroundColor: "black",
//           }}
//         >
//           {/* <SideBar /> */}
          
//         </div>
//         <div
//           className={`h1 d-flex justify-content-center ${classes.gradient}`}
//           style={{
//             width: "100vw",
//             height: "auto",
//             padding: "10px",
//             zIndex: 10,
//           }}
//         >
//           {" "}
//           EduShop
//         </div>
//         <div className="navbar-expand-lg d-lg-none">
//           <Navbar />
//         </div>
//         <div
//           className=""
//           style={{
//             marginLeft: screenWidth > 992 ? "24rem" : "2rem",
//             height: "100dvh",
//             overflowY: "auto",
//           }}
//         >
//           <RoutesWithAnimation />
//           <div style={{ width:"100%", height: "15vh" }}></div>
//         </div>
//       </div>
//       <CourseDetail></CourseDetail>
//     </HashRouter>
    
function MainComp() {
  const sidebarCtx = useContext(SidebarContext);
  const location = useLocation();
  const closeSidebarHandler = () => {
    sidebarCtx.closeSidebar();
    console.log("clicked");
  };
  return (
    <>
      <div
        onClick={closeSidebarHandler}
      // style={{ width: "100vw", height: "100vh" }}
      >
        <div
          className="d-flex align-item-center justify-content-center"
          style={{
            backgroundColor: "#f6f6f6",
            marginBottom: "0px",
            flexDirection: ' column',

            padding: "0px",
          }}
        >
          Edu-Tech
        </div>
        <Navbar />
        <div
        // style={{ width: "100vw", height: "100vh" }}
        >
          {location.pathname === "/" &&
            <img src={IMAGE1} alt="IMAGE1" className="img-fluid" style={{ width: '100%', overflowX: 'clip' }} />}

        </div>
      </div>
      <RoutesWithAnimation />
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <SidebarContextProvider>
        <MainComp />
        <iframe title="abc" width="560" height="315" src="https://www.youtube.com/embed/ywLoEQ6Ta8A" frameborder="0" allowfullscreen></iframe>
      </SidebarContextProvider>
      <Footer></Footer>
    </HashRouter>
  );
}
export default App;
