import React from 'react'
import Messege from './Messege'
const Messeges=(props)=> {
  return (
    <div className='messeges-container'>
      <Messege sms={props.sms} owner={props.owner}/>
      <Messege sms={props.sms} owner={props.owner}/>
      <Messege sms={props.sms} owner={props.owner}/>
      <Messege sms={props.sms} owner={props.owner}/>
      <Messege sms={props.sms} owner={props.owner}/>
      <Messege sms={props.sms} owner={props.owner}/>

     
      
    </div>
  )
};

export default Messeges