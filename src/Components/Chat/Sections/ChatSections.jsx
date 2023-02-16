import React from 'react'
import './ChatSections.css'
const ChatSections = ({imgSrc,name}) => {
  return (
    //chat-nav
    <>
    <div className='chat-sections'>
      <img src={imgSrc}alt="" />
      <div className='name-and-chat' >
      <h5>{name}</h5>
      <p>Hello hi i am bhanujit</p>
      </div>

    </div>
    </>
  )
}

export default ChatSections