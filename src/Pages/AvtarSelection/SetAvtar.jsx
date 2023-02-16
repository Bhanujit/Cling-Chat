import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../App';
import Avtar from '../../Components/Avtar/Avtar';
import './SetAvtar.css'
import {data} from '../../data'
const SetAvtar = () => {
//getting context values
const {user,setUser,handleInput}=useContext(authContext)
const avtarImages=[
    'https://images.freeimages.com/images/previews/d66/woman-avatar-1632963.jpg',
    'https://images.freeimages.com/images/previews/d1f/lady-avatar-1632967.jpg',
    'https://images.freeimages.com/images/previews/7e8/man-avatar-1632965.jpg',
    'https://images.freeimages.com/images/previews/962/avatar-man-with-mustages-1632966.jpg',
    'https://images.freeimages.com/images/previews/971/basic-shape-avatar-1632968.jpg',
    'https://images.freeimages.com/images/previews/fdd/man-avatar-1632964.jpg',
    'https://images.freeimages.com/images/previews/023/geek-avatar-1632962.jpg'
]
const navigate = useNavigate()
const handleClick=()=>{
  if(user.name.length < 3){
    alert('Name should have alteast 3 characters')
    return;
  }
  
  return navigate('/dashboard')
}
  return (
    <div>
      <Avtar 
      headingText='Select Your Avtar'
      avtarImages={avtarImages}
      buttonText='Go to home screen'
      handleName={handleInput('name')}
      handleAvtar={setUser}
      nameValue={user.name}
      avtarValue={user.avtar}
      handleClick={handleClick}
      />;
    </div>
  )
}

export default SetAvtar;