import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    let{id}=useParams();//object{id}
   
    
  return (
    <div>
      userid : {id}
    </div>
  )
}

export default User
