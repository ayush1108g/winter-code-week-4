import React from 'react'
// import IMAGE1 from "../store/IMAGE1.jpg";
import CategoriesMain from "../components/categories/categoriesMain";
import TeamPage from './teamPage';
const HomePage = () => {
    return (
        <div className="container">
            HomePage
            <CategoriesMain />
            <TeamPage />
        </div >
    )
}

export default HomePage;