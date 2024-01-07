import Signin from "../components/Signin";

const SignupPage = (props) => {
    return (
        <div className="d-flex justify-content-center align-items-center flex-nowrap " style={{ height: '90vh', backgroundImage: 'linear-gradient(to bottom, #09161f, #2470a2,#ffff)' }}>
            <Signin pagename={"Signup"} onChooseForgotPass={props.onChooseForgotPass} />
        </div>
    );
}
export default SignupPage;