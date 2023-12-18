import React from 'react'

function SingleMessage({ message, currentUser }) {

  return (
    <div className={
      `d-flex flex-column m-3 
      ${currentUser.id === message.user.id ? 'align-items-end' : 'align-items-start'}`}>
      <small>{message.user.firstName}</small>
      <p className='bg-light rounded my-0 w-25'>{message.text}</p>
      <small>{message.createdAt}</small>
    </div>
  )
}

export default SingleMessage