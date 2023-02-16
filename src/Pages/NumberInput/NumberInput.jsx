import React, { useContext }from 'react'
import {useNavigate} from 'react-router-dom'
import { authContext } from '../../App'
import Registration from '../../Components/Registration/Registration'
import './NumberInput.css'

const NumberInput = () => {
  const {user,handleInput,setUser}=useContext(authContext)
  const navigate = useNavigate();

  const handleClick = async(e)=>{
    e.preventDefault()
   if(user.number.length>10 || user.number.length<10){
    alert('Please Enter a Valid Number')
    setUser((prev)=>({...prev,
      number:"+91"
      }))
   }else{
    navigate('/verify')
   }
  }
  return (
    <>
    <Registration
    imgLink="src\Pages\images\Frame.png"
    type="number-input"
    heading="Login with Mobile Number"
    firstText="enter the mobile number on which you want to get otp to login"
    clickText="Send OTP"
    length={10}
    inputValue={user.number}
    setChange={handleInput('number')}
    handleClick={handleClick}/>
    <div id='recaptcha-container'/>
</>
  )
}

export default NumberInput;


