import React from 'react'
import { useState } from 'react'
import './Messeges.css'
const Messege = (props) => {
  return (
    <div className={props.owner?"owner":"messege-container"}>
    <div className="messegeInfo">
      <img
        src="https://images.freeimages.com/images/previews/d66/woman-avatar-1632963.jpg"
        alt=""
      />
      <span>just now</span>
    </div>
    <div className={props.owner?"owner-messegeContent":"messageContent"}>
      <p>{props.sms}</p>
    </div> 
  </div>
  )
}

export default Messege

{/* <div
ref={ref}
className={`message ${message.senderId === currentUser.uid && "owner"}`}
>
<div className="messageInfo">
  <img
    src={
      message.senderId === currentUser.uid
        ? currentUser.photoURL
        : data.user.photoURL
    }
    alt=""
  />
  <span>just now</span>
</div>
<div className="messageContent">
  <p>{message.text}</p>
  {message.img && <img src={message.img} alt="" />}
</div>
</div> */}