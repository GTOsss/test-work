import React from 'react'
import GuestControlComponent from '../components/guest-control-panel'
import localStorageMod from '../../../modules/local-storage'
import {guestsKey} from '../../../modules/local-storage-const'
import guest from '../../../modules/guest'

class GuestControl extends React.Component {
  constructor(props){
    super(props)
    this.addGuestHandler = this.addGuestHandler.bind(this)
  }

  addGuestHandler() {
    let guests = localStorageMod.get(guestsKey) || []
    guests.push(new guest('', '', false, 'WINE'))
    localStorageMod.set(guestsKey, guests)
    this.props.switchNumberTrInput(this.props.countGuests)
    this.props.updateTable()
  }

  render() {
    return (
      <GuestControlComponent addGuestHandler={this.addGuestHandler} />
    )
  }
}

export default GuestControl