import React from 'react'
import { useParams  } from 'react-router-dom'

const UserDetails = () => {
    const params = useParams()
    console.log(params)
  return (
    <div>UserDetails -- user id is {params.userId}</div>
  )
}

export default UserDetails