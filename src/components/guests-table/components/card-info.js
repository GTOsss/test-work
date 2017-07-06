import React from 'react'

const CardInfo = ({countGuests}) => (
  <div>
    <div className="card">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Total number of guests = {countGuests}
        </li>
      </ul>
    </div>
    <p> </p>
  </div>
)

export default CardInfo