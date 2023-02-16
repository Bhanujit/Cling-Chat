import React,{useState}from 'react'
import './ChatPage.css'
import Sidebar from '../../Components/Chat/SideBar/Sidebar'
import ChatSpace from '../../Components/Chat/ChatSpace/ChatSpace'
import { useContext } from 'react'
import { authContext } from '../../App'
const ChatPage = () => {
  const {user} = useContext(authContext)
  const [sms,setSms]=useState({
    avtar:"",
    time:Date.now(),
    isOwner:false,
    sms:""
  });

  const [id,setId]=useState(1)
  return (
    <div className='chat-box'>
      <Sidebar chats={user.chats} setId={setId}/>
      <ChatSpace chats={user.chats} id={id} sms={sms} setSms={setSms}/>
    </div>
  )
}

export default ChatPage