import Signin from "../components/Signin";

const SignupPage = () => {
    return (
        <div className="d-flex justify-content-center align-items-center flex-nowrap " style={{ height: '90vh', backgroundImage: 'linear-gradient(to bottom, #09161f, #2470a2,#ffff)' }}>
            <Signin pagename={"Signup"} />
        </div>
    );
}
export default SignupPage;