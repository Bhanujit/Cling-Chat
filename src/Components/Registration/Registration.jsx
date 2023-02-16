import React from "react";
import './Registration.css';
import { Link } from "react-router-dom";

const Registration = (props)=>{
    return (
        <div className="registration-card">
            <img src={props.imgLink} alt="" />
            <h4>{props.heading?props.heading:""}</h4>
            <p className="reg-paragraph">{props.firstText?props.firstText:""}</p>
            <div className={props.type}>
            <input className="number-input-input" 
                    type='number'
                    maxLength={props.length}
                    minLength={props.length}
                    onChange={props.setChange}
                    value={props.inputValue}
                    />
            <button className="number-input-button"
            onClick={props.handleClick}
            >{props.clickText}
            </button>
            </div>
            <p className="">{props.secText?props.secText:""}</p>
            <Link className ="click-here" to='/'>{props.link}</Link>
        </div>
    )
}

export default Registration;