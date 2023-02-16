import React from "react";
import './Avtar.css'

const Avtar = (props)=>{
    let nameLenght = props.nameValue.length;
    return (
        <div className="avtar-container">
            <h4>{props.headingText}</h4>
            <div className="avtar-img">
                <img src={props.avtarValue} alt="" />
            </div>
            <div className="images-container">
           {props.avtarImages.map((item)=>{
            return(<button className="avtar-images" key={item}
            onClick={()=>{
                props.handleAvtar((prev)=>({...prev,
                avtar:item
            }))
            }}
            >
            <img src={item} className='images' alt="avtar-images" />
            </button>)
           })}
            </div>
            <div className="input-name">
                <div className="input-name-div">
                <input type="text" 
                       placeholder="Select Your Name"
                       onChange={props.handleName}
                       value={props.nameValue}/>
                </div>
                <button onClick={props.handleClick} 
                        className={nameLenght < 3 ?"null":"not-null"}>
                     {props.buttonText}
                </button>
            </div>
        </div>
    )
}

export default Avtar;
