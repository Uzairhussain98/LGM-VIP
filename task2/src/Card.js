import React from 'react'
import './Card.css'

const Card = ({avatar , fname , lname , email} ) => {
  return (
    <div className="card">
        <img src={avatar} alt="" />
        <h2>{fname} {lname}</h2>
        <h3>{email}</h3>
        <button>Connect</button>
      
    </div>
  )
}
export default Card
