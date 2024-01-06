
import React, {forwardRef} from "react";
// import { Dropdown } from 'primereact/dropdown';
import css from './dropdown.module.css';
const Dropdowninput= forwardRef( function Dropdowninput1(props,ref) {
    // const [selectedCity, setSelectedCity] = useState(null);
    const list = props.list;
    return (
        <div className={css.input}>
            <label >{props.label}</label>
            <select className={css.dropdown} ref={ref}>
                {
                    list.map((e)=>(
                        <option key={e.code} value={e.name}>{e.name}</option>
                    ))
                }
            </select>
        </div>
    );
});
export default Dropdowninput;
