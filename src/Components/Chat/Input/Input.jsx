import React,{useState}from 'react'
import './Input.css'


const Input = ({setSms}) => {
  const [text,setText]=useState("")
  const handleCLick=()=>{
    setSms((prev)=>({...prev,
      sms:text
      }));
     setText("")
  }
  return (
    <div className='input-container'>
        <input type="text" placeholder='write a messege....'
        value={text}
        onChange={(event)=>{setText(event.target.value)}}/>
        <button onClick={handleCLick}>Send</button>
    </div>
    
  )
}

export default Input