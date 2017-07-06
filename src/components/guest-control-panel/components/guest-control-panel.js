import React from 'react'

const GuestControlPanel = ({addGuestHandler}) => (
  <div>
    <button className="btn btn-default btn-md btn-block"
            onClick={addGuestHandler}>Add guest</button>
  </div>
)

export default GuestControlPanel