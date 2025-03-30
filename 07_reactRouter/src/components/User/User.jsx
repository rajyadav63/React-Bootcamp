import React from 'react'
import { useParams } from 'react-router'


function User() {
    const {userid} = useParams()
  return (
    <div className='bg-orange-400 py-3 text-2xl'>User: {userid}</div>
  )
}

export default User
