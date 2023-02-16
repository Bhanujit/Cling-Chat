import React from 'react'
import './Sidebar.css'
import '../Sections/ChatSections'
import ChatSections from '../Sections/ChatSections'
import Navbar from '../Navbar/Navbar'

const Sidebar = ({chats,setId}) => {
  
  return (
    <div className='sidebar-container'>
      <Navbar/>
      {chats.map((e)=>
      (
        <button className='section-selection' onClick={()=>{
          setId(e.userId)
        }}>
          <ChatSections imgSrc={e.avtar} name={e.userName} key={e.userId}/>
        </button>
      ))}
    </div>
  );
}

export default Sidebar;