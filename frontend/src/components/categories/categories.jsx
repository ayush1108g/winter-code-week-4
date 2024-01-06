import './categories.css';
// import { useLocation } from 'react-router';
// import { useNavigate } from 'react-router-dom';

export default function Categories(props) {


    return (
        <div id='categoryMain'>
            <li
                onClick={props.onClick}
                title={props.title}>
                {/* {location.pathname === '/' && <img src={props.image} alt={props.alt} />} */}
                <h5>{props.title}</h5>
            </li>
        </div>
    )
}