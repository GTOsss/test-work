import React from 'react'
import MainPageComponent from '../components/main-page'
import {guestsKey} from '../../../modules/local-storage-const'
import localStorageMod from '../../../modules/local-storage'
import guest from '../../../modules/guest'

class MainPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {guests: [], inputTrNumber: -1}
  }

  updateTable() {
    let guests = localStorageMod.get(guestsKey) || []
    this.setState({guests: guests})
  }

  deleteGuest(i) {
    let bufferGuests = [...this.state.guests]
    bufferGuests.splice(i, 1)
    localStorageMod.set(guestsKey, bufferGuests)
    this.setState({guests: bufferGuests})
  }

  switchNumberTrInput(i) {
    this.setState({inputTrNumber: i})
  }

  componentDidMount() {
    this.setState({guests: localStorageMod.get(guestsKey) || []})
  }

  changeGuest({i, name, age, coupled, drink}) {
    let bufferGuests = [...this.state.guests]
    bufferGuests[i] = new guest(name, age, coupled, drink)
    localStorageMod.set(guestsKey, bufferGuests)
    this.setState({guests: bufferGuests})
  }

  render() {
    return (
      <MainPageComponent guests={this.state.guests || []}
                         inputTrNumber={this.state.inputTrNumber}
                         switchNumberTrInput={(i) => {this.switchNumberTrInput(i)}}
                         updateTable={() => {this.updateTable()}}
                         deleteGuest={(i) => {this.deleteGuest(i)}}
                         changeGuest={(i) => {this.changeGuest(i)}} />
    )
  }
}

export default MainPage