import React, { useContext } from 'react'
import './Otp.css'
import { useNavigate } from 'react-router-dom'
import Registration from '../../Components/Registration/Registration'

const OtpVerified = () => {
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate('/select-avtar')
  }
  return (
   <Registration 
   type='otp-varified'
   heading= "Varified"
   clickText="Next"
   handleClick={handleClick}
   />
  )
}

export default OtpVerified;


