import React, { createContext, useState,useEffect } from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import OtpVerification from './Pages/OtpVerification/OtpVerification';
import NumberInput from './Pages/NumberInput/NumberInput';
import SetAvtar from './Pages/AvtarSelection/SetAvtar';
import DashBoard from './Pages/DashBoard/DashBoard'
import ChatPage from './Pages/Chat/ChatPage'
import OtpVerified from './Pages/OtpVerification/OtpVerified';
import webFont from 'webfontloader';
// { userId:1,
  // userName:"Ava",
  // avtar:"https://images.freeimages.com/images/previews/d66/woman-avatar-1632963.jpg",
  // chatData:[{
  //           avtar:"https://images.freeimages.com/images/previews/d66/woman-avatar-1632963.jpg",
  //           isOwner:false,
  //           time:Date.now(),
  //           sms:"hi"
  //        },
  //        {
  //         avtar:"https://images.freeimages.com/images/previews/d66/woman-avatar-1632963.jpg",
  //         isOwner:true,
  //         time:Date.now(),
  //         sms:"hello"
  //      },
  //     ],
  // },


//Creating Context
export const authContext = createContext({})
export let data = [
  {
  userId:1,
  number:"+918794476826",
  otp: Math.floor(1000 + Math.random() * 9000).toString(),
  isVarified:true,
  avtar:'https://images.freeimages.com/images/previews/d66/woman-avatar-1632963.jpg',
  name:"Chits",
  chats:[{
    userId:1,
    number:"+919863673593",
    userName:"Ishan",
    avtar:"https://images.freeimages.com/images/previews/023/geek-avatar-1632962.jpg",
    chatData:[{
                avtar:"https://images.freeimages.com/images/previews/023/geek-avatar-1632962.jpg",
                isOwner:false,
                time:Date.now(),
                sms:"hi"
             },
             {
              avtar:"https://images.freeimages.com/images/previews/d66/woman-avatar-1632963.jpg",
              isOwner:true,
              time:Date.now(),
              sms:"hello"
           }]
   }],
},
{
 userId:2,
 number:"+919863673593",
 otp: Math.floor(1000 + Math.random() * 9000).toString(),
 isVarified:true,
 avtar:'https://images.freeimages.com/images/previews/023/geek-avatar-1632962.jpg',
 name:"Ishan",
 chats:[{
     userId:1,
     number:"+918794476826",
     userName:"Eve",
     avtar:"https://images.freeimages.com/images/previews/d66/woman-avatar-1632963.jpg",
     chatData:[]

    }]
 }
]



function App() {
  //fort fonts
  useEffect(()=>{
    webFont.load({
      google:{
        families:["Roboto","Droid Snas","Chilanka","Poppins"]
      }
    })
  })
  const myData = {
    userId:1,
    number:"+918794476826",
    otp: Math.floor(1000 + Math.random() * 9000).toString(),
    isVarified:true,
    avtar:'https://images.freeimages.com/images/previews/d66/woman-avatar-1632963.jpg',
    name:"Riya",
    chats:[{
      userId:1,
      number:"+919863673593",
      userName:"Ishan",
      avtar:"https://images.freeimages.com/images/previews/023/geek-avatar-1632962.jpg",
      chatData:[{
                  avtar:"https://images.freeimages.com/images/previews/023/geek-avatar-1632962.jpg",
                  isOwner:false,
                  time:Date.now(),
                  sms:"hi"
               },
               {
                avtar:"https://images.freeimages.com/images/previews/d66/woman-avatar-1632963.jpg",
                isOwner:true,
                time:Date.now(),
                sms:"hello"
             }]
     }],
  }
  const [user,setUser]=useState({
    userId:1,
    number:"+918794476826",
    otp: Math.floor(1000 + Math.random() * 9000).toString(),
    isVarified:true,
    avtar:'https://images.freeimages.com/images/previews/d66/woman-avatar-1632963.jpg',
    name:"Riya",
    chats:[{
      userId:1,
      number:"+919863673593",
      userName:"Ishan",
      avtar:"https://images.freeimages.com/images/previews/023/geek-avatar-1632962.jpg",
      chatData:[{
                  avtar:"https://images.freeimages.com/images/previews/023/geek-avatar-1632962.jpg",
                  isOwner:false,
                  time:Date.now(),
                  sms:"hi"
               },
               {
                avtar:"https://images.freeimages.com/images/previews/d66/woman-avatar-1632963.jpg",
                isOwner:true,
                time:Date.now(),
                sms:"hello"
             }]
     }],   
  }) 

  const handleInput = (field)=>{
    return (e)=>{
      setUser((prev)=>({...prev,
      [field]:e.target.value
      }));
    };
  };
  const getData= async(data)=>{
    await localStorage.getItem(data).then(data=>JSON.parse(data))
  }
  const setData = async(data)=>{
       await localStorage.setItem("cling-data",JSON.stringify(data))
  }
  return (
    <authContext.Provider value={{ user,handleInput,setUser,getData,setData,data}}>
    <div className="App">
     <Routes>
      <Route path = '/' element={<NumberInput/>}/>
      <Route path = '/verify' element={<OtpVerification />}/>
      <Route path = '/verified' element = {<OtpVerified/>}/>
      <Route path = '/select-avtar' element={<SetAvtar/>}/>
      <Route path = '/dashboard' element={<DashBoard/>}/>
      <Route path = '/chat' element ={<ChatPage/>}/>
     </Routes>
    </div>
    </authContext.Provider>
  );
}

export default App;
