import React from 'react'
import TrGuest from './tr-guest'
import TrGuestUnput from './tr-guest-input'
import CardInfo from './card-info'
import cx from 'classnames'
import styles from '../../../styles/table.scss'

const createTr = (el, i, inputTrNumber, switchNumberTrInput, deleteGuest, changeGuest) => (
  i === inputTrNumber
    ?
    <TrGuestUnput key={i}
                  name={el.name}
                  age={el.age}
                  coupled={el.coupled}
                  drink={el.drink}
                  i={i}
                  switchNumberTrInput={switchNumberTrInput}
                  changeGuest={changeGuest} />
    :
    <TrGuest key={i}
             name={el.name}
             age={el.age}
             coupled={el.coupled}
             drink={el.drink}
             i={i}
             switchNumberTrInput={switchNumberTrInput}
             deleteGuest={deleteGuest} />
)

const GuestsTable = ({guests, deleteGuest, inputTrNumber, switchNumberTrInput, changeGuest,
                       changeFilter, filterValue, countGuests}) => (
 <div>
    <table className={cx("table table-inverse table-sm", styles.tableGuests)}>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Age</th>
          <th className="text-center">Coupled</th>
          <th className="text-center">
            <select className="form-control form-control-sm"
                    onChange={changeFilter}>
              <option>ALL DRINK </option>
              <option>WINE</option>
              <option>BEER</option>
              <option>JUICE</option>
            </select>
          </th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {
          guests.map((el, i) => {
            if(filterValue === 'ALL DRINK') {
              return createTr(el, i, inputTrNumber, switchNumberTrInput, deleteGuest, changeGuest)
            }
            else if (filterValue === el.drink) {
              return createTr(el, i, inputTrNumber, switchNumberTrInput, deleteGuest, changeGuest)
            }
          })
        }
      </tbody>
    </table>
    <CardInfo countGuests={countGuests} />
 </div>
)

export default GuestsTable