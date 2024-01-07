import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import classes from './ErrorPage.module.css';
const Errorpage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const query = new URLSearchParams(location.search);
    const errorMessage = query.get('error');
    return (
        <div className={classes["error-container"]} style={{ background: 'none' }}>
            <div className={classes["error-content"]}>
                <h1>Oops! Something went wrong.</h1>
                {!errorMessage ? <p>We're sorry, but an error has occurred. Please try again later.</p> : <p> {errorMessage}</p>}
                <br />
                <div className={classes.error} onClick={() => (navigate(-1))} style={{ color: 'blueviolet', cursor: 'pointer' }}>Go Back  ↩ </div>
                <br />
                <Link className={classes.error} to="/">Go back to home page 🏠</Link>

            </div>
        </div >
    )
}
export default Errorpage;