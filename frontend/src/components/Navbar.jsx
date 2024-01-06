import classes from "./Navbar.module.css";
import { useNavigate } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = (params) => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.clear();
    navigate('/login');
  }
  return (<>
    <div className={classes.navbar}>
      <div className="dropdown" >
        <button className="btn"
          type="button" id="dropdownMenuButton" data-toggle="dropdown" >
          <div className="h2 d-flex" style={{ flexDirection: 'row' }}> <span ><GiHamburgerMenu /></span><span>&nbsp;&nbsp;Menu</span></div>
        </button>
        <div className="dropdown-menu bg-light" aria-labelledby="dropdownMenuButton">
          <li onClick={() => { navigate('/') }} className="dropdown-item" >Welcome</li>
          <li className="dropdown-item" onClick={() => { navigate('/patientRegistration') }}> Patient Registration</li>
          <li className="dropdown-item" onClick={() => { navigate('/patientList') }}>Patient List</li>
          <li className="dropdown-item" onClick={() => { navigate('/hospitalRoomStatus') }}>Hospital Room Status </li>
          <li className="dropdown-item" onClick={() => { navigate('/payment') }}>Payment</li>
          <li className="dropdown-item" onClick={() => { navigate('/employeeRegistration') }}>  Employee Registration</li>
          <li className="dropdown-item" onClick={() => { navigate('/employeeList') }}>  Employee List </li>
          <li className="dropdown-item" onClick={() => { navigate('/team') }}>Team</li>
          <li className="dropdown-item" onClick={logoutHandler} > LOGOUT</li>
        </div>
      </div>
    </div >
  </>
  );
};
export default Navbar;
