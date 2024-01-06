import css from './modal.module.css';
import { Fragment } from 'react';
import ReactDOM from 'react-dom'
import React from 'react'

function Backdrop() {
    return (
        <div className={css.backdrop} />
    )
}


function Overlay(props) {
    return (
        <div className={css.modal}>
        <div>{props.children}
        </div>
        </div>
    )
}
const overlay = document.getElementById("overlays")
function Modal(props) {
    
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop/> ,overlay)}
            {ReactDOM.createPortal(<Overlay>{props.children}</Overlay> ,overlay)}
        </Fragment>
    )
}

export default Modal;