import React from 'react'
import TdClick from './td-click'
import styles from '../../../styles/main.scss'

const TrGuest = ({i, name, age, coupled, drink, deleteGuest, switchNumberTrInput}) => (
  <tr>
    <td>{i+1}</td>
    <TdClick switchNumberTrInput={switchNumberTrInput} i={i} content={name} />
    <TdClick switchNumberTrInput={switchNumberTrInput} i={i} content={age} />
    <TdClick switchNumberTrInput={switchNumberTrInput} i={i}
             content={coupled ? 'Yes' : 'No'}
             className="text-center" />
    <TdClick switchNumberTrInput={switchNumberTrInput} i={i} content={drink} className="text-center" />
    <td className="text-right">
      <button className="btn btn-danger btn-sm"
              onClick={() => deleteGuest(i)}>X
      </button>
    </td>
  </tr>
)

export default TrGuest