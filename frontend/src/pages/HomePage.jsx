import React from 'react'
// import IMAGE1 from "../store/IMAGE1.jpg";
import CategoriesMain from "../components/categories/categoriesMain";
import TeamPage from './teamPage';
import ContactUs from './../components/contactus'
const HomePage = () => {
    return (
        <div>
            HomePage
            <CategoriesMain />
            <TeamPage />
            <div id="contact-us" className="d-flex justify-content-center align-items-center flex-nowrap " style={{backgroundImage: 'linear-gradient(to bottom, #ffff,rgb(34, 33, 33))', borderTop: "#888686 solid"}}><ContactUs/></div>
        </div >
    )
}

export default HomePage;