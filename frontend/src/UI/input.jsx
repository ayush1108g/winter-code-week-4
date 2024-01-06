import classes from './input.module.css';
import React,{forwardRef} from 'react';
const Input = forwardRef( function Input1(props,ref){
    return(
        <div className={classes.input}>
            <label>{props.label}</label>
            <input type={props.type} ref={ref}/>
        </div>
    )
})

export default Input;