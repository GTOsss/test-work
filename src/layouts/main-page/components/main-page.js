import React from 'react'
import ControlPanelLocalStorage from '../../../components/control-panel-local-storage'
import GuestsTable from '../../../components/guests-table'
import GuestControlPanel from '../../../components/guest-control-panel'

const MainPage = ({guests, updateTable, deleteGuest, changeGuest, switchNumberTrInput, inputTrNumber}) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12">
        <GuestsTable guests={guests}
                     inputTrNumber={inputTrNumber}
                     switchNumberTrInput={switchNumberTrInput}
                     deleteGuest={deleteGuest}
                     changeGuest={changeGuest} />
        <GuestControlPanel updateTable={updateTable}
                           switchNumberTrInput={switchNumberTrInput}
                           countGuests={guests.length} />
        <ControlPanelLocalStorage updateTable={updateTable} />
      </div>
    </div>
  </div>
)

export default MainPage