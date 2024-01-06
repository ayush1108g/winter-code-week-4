// import classes from "./App.module.css";
// import CourseDetail from "./components/course-detail";
import Card from "./components/Card.jsx";
import CourseDetail from "./components/course-detail/course-detail.jsx";
import Footer from "./components/footer/mainFooter.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useLocation, HashRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
// import SideBar from "./components/SideBar";
import { useContext, useState } from "react";
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
import CategoriesMain from "./components/categories/categoriesMain";

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
        {/* <Route path="/login" element={<LoginPage />} /> */}
        <Route path="/forgotpassword" element={<ForgotPassPage />} />
        <Route
          path="/login/forgotpassword/:id"
          element={<ForgotPassIDPage />}
        />
        <Route
          path="/login/forgotpassword/:id/confirm"
          element={<ForgotPassConfirmPage />}
        />
        {/* <Route path="/signup" element={<SignupPage />} /> */}
        <Route path="/team" element={<TeamPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </AnimatePresence>
  );
}

function MainComp() {

  const sidebarCtx = useContext(SidebarContext);
  const location = useLocation();
  const closeSidebarHandler = () => {
    sidebarCtx.closeSidebar();
    console.log("clicked");
  };
  return (
    <>
      <div onClick={closeSidebarHandler}  >
        <div
          className="h2 d-flex align-item-center justify-content-center"
        // style={{
        //   backgroundColor: "#f6f6f6",
        //   marginBottom: "0px",
        //   padding: "0px",
        // }}
        >
          Edu-Tech
        </div>
        <Navbar />
        <div
        // style={{ width: "100vw", height: "100vh" }}
        >
          {/* {location.pathname === "/"&& */}
          <img src={IMAGE1} alt="IMAGE1" className="img-fluid" style={{ width: '100%', overflowX: 'clip' }} />

        </div>
        <SignupPage />
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

        {/* <iframe title="abc" width="560" height="315" src="https://www.youtube.com/embed/ywLoEQ6Ta8A" frameborder="0" allowfullscreen></iframe> */}
        <Footer></Footer>
      </SidebarContextProvider>
      {/* <Card></Card> */}
    </HashRouter>
  );
}
export default App;
