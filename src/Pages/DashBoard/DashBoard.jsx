import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {data} from '../../data'
import './DashBoard.css'

const DashBoard = () => {
  const navigate = useNavigate()
  console.log(data)
  return (
    <div>
      <button onClick={()=>{navigate('/chat')}}>
        Chat Space
      </button>
    </div>
  )
}

export default DashBoard