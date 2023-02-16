import React,{useState}from 'react'
import "./ChatSpace.css"
import Input from '../Input/Input'
import Messege from '../Messeges/Messege'

const ChatSpace = ({chats,id,sms,setSms}) => {
  return (
    <div className='chat-space-container'>
      <div className="chat-info">
        <h4>{chats[id-1].userName}</h4>
      </div>
      {chats[id-1].chatData.map((e)=>(<Messege sms={e.sms} owner={e.isOwner}/>))}
      <Input sms = {sms} setSms = {setSms}/>
    </div>
    
  )
}

export default ChatSpace;

// {userName:"Ava",
//             chatData:[{
//                       avtar:"https://images.freeimages.com/images/previews/d66/woman-avatar-1632963.jpg",
//                       isOwner:false,
//                       time:Date.now(),
//                       sms:"hi"
//                    },
//                    {
//                     avtar:"https://images.freeimages.com/images/previews/d66/woman-avatar-1632963.jpg",
//                     isOwner:true,
//                     time:Date.now(),
//                     sms:"hi"
//                  },
//                   ],
            
//   }