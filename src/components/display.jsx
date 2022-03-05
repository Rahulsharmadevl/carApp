import React from 'react'

function Display(props) {
  return (
    <div>
    {
        props.cardetails.map(car=>{
            return<div key={car.name}>
            <p>{car.name}</p>
            <p>{car.model}</p>
            <p>{car.quantity}</p>

            </div>
        })
    }
    
    </div>
  )
}

export default Display