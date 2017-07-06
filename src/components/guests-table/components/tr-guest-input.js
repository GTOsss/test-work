import React from 'react'
import styles from '../../../styles/main.scss'

class TrGuestInput extends React.Component {
  constructor(props){
    super(props)
    this.onChangeCoupled = this.onChangeCoupled.bind(this)
    this.state = {coupled: this.props.coupled}
  }

  onChangeCoupled() {
    this.setState({coupled: !this.state.coupled});
  }

  render() {
    return (
      <tr className={styles.pointer} >
        <td>
          {this.props.i+1}
        </td>
        <td>
          <input type="text" defaultValue={this.props.name} ref="name" className="form-control-sm" />
        </td>
        <td>
          <input type="text" defaultValue={this.props.age} ref="age" className="form-control-sm" />
        </td>
        <td className="text-center">
          <input type="checkbox" checked={this.state.coupled ? 'checked' :''}
                 onChange={this.onChangeCoupled} />
        </td>
        <td>
          <select className="form-control form-control-sm" ref="drink">
            <option>WINE</option>
            <option>BEER</option>
            <option>JUICE</option>
          </select>
        </td>
        <td className="text-right">
          <div className="btn-group">
            <button className="btn btn-success btn-sm"
                    onClick={() => {
                      this.props.switchNumberTrInput(-1);
                      this.props.changeGuest({
                        name: this.refs.name.value,
                        age: this.refs.age.value,
                        coupled: this.state.coupled,
                        drink: this.refs.drink.value,
                        i: this.props.i
                      });
                    }}>Save
            </button>
            <button className="btn btn-primary btn-sm"
                    onClick={() => this.props.switchNumberTrInput(-1)}>Cancel
            </button>
          </div>
        </td>
      </tr>
    )
  }
}


export default TrGuestInput