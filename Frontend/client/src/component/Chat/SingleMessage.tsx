import React from 'react'

function SingleMessage({ message, currentUser }) {

  return (
    <div className={
      `d-flex flex-column m-3 
      ${currentUser.id === message.user.id ? 'align-items-end' : 'align-items-start'}`}>
      <small>{message.user.firstName}</small>
      <p className={
        `rounded my-0 w-25 
        ${currentUser.id === message.user.id ? 'bg-info' : 'bg-light'}`}
      >
        {message.text}
      </p>
      <small>{message.createdAt}</small>
    </div>
  )
}

export default SingleMessage