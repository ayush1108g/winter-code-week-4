import styles from './sidebar.module.css';
import SidebarContext from "../store/context/sidebar-context";
import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate, useLocation } from 'react-router-dom';
import { scrollToHandler } from '../store/scrollTo';
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/redux/auth";
const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const sidebarCtx = useContext(SidebarContext);
    const isAuth = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    const animateVariants = {
        show: {
            x: [250, 0],
            transition: {
                times: [0, 1],
                ease: "linear",
                duration: 0.5,
            },
            exit: {
                x: [0, -250],
                transition: {
                    times: [0, 1],
                    ease: "easeInOut",
                    duration: 0.5,
                },
            },
        },
    };

    const scroll = (id, offset) => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                scrollToHandler(id, offset);
            }, 500)
        } else {
            scrollToHandler(id, offset);
        }
    }
    const logoutHandler = () => {
        localStorage.clear();
        dispatch(authActions.logout());
    }
    return (
        <AnimatePresence>
            <motion.div
                variants={animateVariants}
                animate="show"
                exit="exit"
                onClick={(e) => { e.stopPropagation() }}
                className={`${styles.sidebar} ${sidebarCtx.isSidebarOpen ? styles.open : ''}`}>
                <ul style={{ listStyle: 'none' }}>
                    <li className={styles.li} onClick={() => { scroll('toppage', 0) }}>Home</li>
                    <li className={styles.li} onClick={() => { scroll('login', 100) }}>Login</li>
                    <li className={styles.li} onClick={() => { scroll("catagories", 100) }}>Courses</li>
                    <li className={styles.li} onClick={() => { scroll('teampage', 50) }}>Our team</li>
                    <li className={styles.li} onClick={() => { scroll("contact-us", 100) }}>Contact us</li>
                    <li className={styles.li} onClick={() => { sidebarCtx.toggleSidebar() }}>Close</li>
                    {isAuth && <li className={styles.li} onClick={logoutHandler}>Logout</li>}
                </ul>
            </motion.div>
        </AnimatePresence >
    );
};

export default Sidebar;
