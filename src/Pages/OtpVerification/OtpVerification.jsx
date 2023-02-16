import React, { useContext, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Registration from '../../Components/Registration/Registration'
import './Otp.css'
import { authContext } from '../../App'

const OtpVerification = (props) => {
  const{user,setUser}=useContext(authContext)
  const [otp,setOtp] = useState('')
  const navigate = useNavigate()
  const handleChange =(event)=>{
    setOtp(event.target.value)
  }
  console.log(`Your OTP is ${user.otp}`)
  const handleClick = ()=>{
    if(user.otp===otp){
      setUser((prev)=>({...prev,
        isVarified:true
        }));
      return navigate('/verified')
    }else{
      return navigate('/')
    }
  }
  return (
   <Registration
   type="otp-input"
   heading="OTP Sent"
   firstText={`Enter 4-digit otp sent to ${props.num}`}
   clickText="Confirm"
   length={4}
   inputValue={otp}
   setChange={handleChange}
   handleClick={handleClick}
   secText='Want to change mobile number?'
   link='Click Here'
   />
  )
}

export default OtpVerification;






