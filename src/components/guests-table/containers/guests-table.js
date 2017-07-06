import React from 'react'
import GuestsTableComponent from '../components/guests-table'

class GuestsTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {filterValue: 'ALL DRINK'}
    this.changeFilter = this.changeFilter.bind(this)
  }

  changeFilter(e) {
    this.setState({filterValue: e.target.value})
  }

  getCountGuests(guests) {
    let count = 0
    guests.forEach(el => {
      count++;
      if(el.coupled)
        count++
    })
    return (count)
  }

  render() {
    return (
      <GuestsTableComponent {...this.props}
                            changeFilter={(e) => {this.changeFilter(e)}}
                            filterValue={this.state.filterValue}
                            countGuests={this.getCountGuests(this.props.guests)} />
    )
  }
}

export default GuestsTable