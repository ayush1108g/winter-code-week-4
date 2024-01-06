import Button from "../UI/Button";
import { useNavigate } from "react-router";
export default function SideBar() {
  const navigate = useNavigate();


  const logoutHandler = () => {
    localStorage.clear();
    navigate('/login');
  }
  return (
    <aside className="px-3.5 py-3 bg-stone-800 text-stone-50 md:w-72 rounded-r-xl" style={{ height: '100dvh', overflowY: 'auto' }}>
      {/* <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2> */}
      <div>
        <ul>
          <li><Button onClick={() => { navigate('/') }}>Home page</Button></li>
          <li><Button onClick={() => { navigate('/patientRegistration') }}>Patient Registration</Button></li>
          <li><Button onClick={() => { navigate('/patientList') }}>Patient List</Button></li>
          <li><Button onClick={() => { navigate('/hospitalRoomStatus') }}>Hospital Room Status</Button></li>
          <li><Button onClick={() => { navigate('/payment') }}>Payment</Button></li>
          <li><Button onClick={() => { navigate('/employeeRegistration') }}> Employee Registration</Button></li>
          <li><Button onClick={() => { navigate('/employeeList') }}> Employee List </Button></li>
          <li><Button onClick={() => { navigate('/team') }}>Team</Button></li>
          <li><Button onClick={logoutHandler}>LOGOUT</Button></li>
        </ul>
      </div>
    </aside>
  );
}
