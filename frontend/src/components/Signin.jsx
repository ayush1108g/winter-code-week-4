import classes from "./Signin.module.css";
import axios from "axios";
import { useNavigate } from "react-router";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ToLink } from "../App";
import Modal from './../UI/Modal'
const Signin = (props) => {
  const navigate = useNavigate();
  const [errormsg, setErrormsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginstate, setloginstate] = useState('Signup');
  const codeInputRef = useRef();
  const nameInputRef = useRef();
  const phoneInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const addressInputRef = useRef();

  const handleTogglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const loginpageHandler = () => {
    if (loginstate === "Signup") {
      setloginstate("Login");
    }
    else {
      setloginstate("Signup")
    }
  };
  const forgotPasswordHandler = () => {
    navigate("forgotpassword");
  };



  const signupLoginHandler = async (e) => {
    e.preventDefault();
    let enteredName = "";
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    if (enteredEmail.trim().length === 0 || enteredPassword.trim().length === 0)
      return setErrormsg("Please enter all the fields");
    const data = {
      emailid: enteredEmail,
      password: enteredPassword,
    };
    if (props.pagename === "Signup") {
      const enteredCode = codeInputRef.current.value;
      data.code = enteredCode;
      enteredName = nameInputRef.current.value;
      data.name = enteredName;
      const enteredPhone = phoneInputRef.current.value;
      data.phoneno = enteredPhone;
      const enteredAddress = addressInputRef.current.value;
      data.address = enteredAddress;
      if (enteredName.trim().length === 0 || enteredPhone.trim().length === 0) { return setErrormsg("Please enter all the fields"); }
      if (enteredEmail.trim().length === 0) { return setErrormsg("Please enter all the fields"); }
    } else {
    }
    const page = props.pagename.toLowerCase();

    try {
      setIsLoading(true);
      let resp;
      resp = await axios.post(`${ToLink}/user/${page}`, data, {
        timeout: 30000,
      });

      if (resp.status === 201 || resp.status === 200) {
        localStorage.setItem("isLoggedIn", "1");
        localStorage.setItem("email", enteredEmail);
        if (props.pagename === "Login") {
          localStorage.setItem("name", resp.data.name);
          localStorage.setItem("id", resp.data.id);
          localStorage.setItem("address", resp.data.address);
          localStorage.setItem("phoneno", resp.data.phoneno);
        }
        emailInputRef.current.value = "";
        passwordInputRef.current.value = "";
        if (props.pagename === "Signup") {
          localStorage.setItem("phoneno", phoneInputRef.current.value);
          localStorage.setItem("address", addressInputRef.current.value);
          localStorage.setItem("name", enteredName);
          localStorage.setItem("id", resp.data.data.usersignup._id);

          nameInputRef.current.value = "";
          phoneInputRef.current.value = "";
          addressInputRef.current.value = "";
        }
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      if (error.code === "ERR_BAD_REQUEST") setErrormsg("Email already in use");
      else if (error.code === "ERR_BAD_RESPONSE")
        setErrormsg("Server Not Responding...");
      else setErrormsg("An error occurred. Please try again.");
    }
    setIsLoading(false);
  };
  const animateVariants = {
    show: {
      scale: [15, 0],
      transition: {
        times: [0, 1],
        ease: "easeInOut",
        duration: 0.5,
      },
    },
    hide: {
      scale: 0,
    },
    exit: {
      scale: [0, 15],
      transition: {
        times: [0, 1],
        ease: "easeInOut",
        duration: 0.5,
      },
    },
  };

  return (
    <>

      <motion.form
        id='login'
        key={props.pagename}
        className={`border-bottom-0 ${classes.form}`}
      >
        {!isLoading && <p className={classes.loading}> {errormsg}</p>}
        {isLoading && (
          <div className="spinner-border text-danger" role="status">
            {/* <span className="sr-only">Loading...</span> */}
          </div>
        )}
        <motion.div
          variants={animateVariants}
          animate="show"
          exit="exit"
          className={classes.box}
        ></motion.div>
        {/* {props.pagename === "Signup" && ( */}
        <motion.div
          variants={animateVariants}
          animate="show"
          exit="exit"
          className={classes.box}
        ></motion.div>
        <h3>{loginstate === "Signup" ? "Sign UP" : "Log in"}</h3>
        {loginstate === "Signup" && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className={"small d-flex justify-content-end font-monospace row text-dark " + classes.signin}
            style={{ fontSize: "2vh" }}
            onClick={forgotPasswordHandler}
          >

            <div className="input-group mb-3">
              <input
                className="form-control"
                type="text"
                id="name"
                placeholder="Name"
                autoComplete="on"
                ref={nameInputRef}
                pattern=".{4,}"
                title="Username must be at least 4 characters long"
                required
              />
            </div>
            <div className="input-group mb-3">
              <input
                className="form-control"
                type="number"
                id="phone"
                autoComplete="on"
                placeholder="Phone Number"
                ref={phoneInputRef}
                pattern="[0-9]{10}"
                title="Please enter your 10 digit number "
                required
              />
            </div>
          </motion.div>
        )}
        <div className="input-group mb-3">
          <input
            className="form-control"
            type="email"
            id="email"
            autoComplete="on"
            placeholder="email-id"
            ref={emailInputRef}
            title="Please enter a valid email address in the format user@example.com"
            required
          />
        </div>




        <div className="input-group mb-3">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className="form-control"
            placeholder={!showPassword ? " · · · · · · · · " : "password"}
            ref={passwordInputRef}
            pattern=".{8,}"
            title="Password must be at least 8 characters long"
            required
          />
          <span className="input-group-text" onClick={handleTogglePassword}>
            {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
          </span>
        </div>


        <div className={classes.buttons}>
          <button
            className="btn btn-primary w-100"
            type="submit"
            onClick={signupLoginHandler}
          >
            {props.pagename}
          </button>
        </div>
        <div className={classes.pagechange}>
          <b>
            <p
              onClick={loginpageHandler}
              className={"small font-monospace text-center row text-dark " + classes.signin}
            >
              {loginstate === "Signup" ? "Already" : "Don't"} have an
              account? {loginstate === "Signup" ? "Login " : "Signup"}
            </p>
            <motion.p
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className={"small d-flex justify-content-end font-monospace row text-dark " + classes.signin}
              style={{ fontSize: "2vh" }}
              onClick={forgotPasswordHandler}
            >
              {" "}
              {loginstate === "Login"
                ? "Forgot Password?"
                : "                  "}
            </motion.p>
          </b>
        </div>
      </motion.form>

    </>
  );
};
export default Signin;
