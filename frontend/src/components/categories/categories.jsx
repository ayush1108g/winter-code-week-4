import { scrollToHandler } from '../../store/scrollTo';
import './categories.css';

export default function Categories(props) {



    return (
        <div id='categoryMain'>
            <li
                id={props.id}
                onClick={() => { scrollToHandler(props.title, 100) }}
                title={props.title}>
                <h5>{props.title}</h5>
            </li>
        </div>
    )
}