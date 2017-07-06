import React from 'react'
import cx from 'classnames'
import styles from '../../../styles/main.scss'

const TdClick = ({i, content, switchNumberTrInput, className}) => (
  <td className={cx(styles.pointer, className || '')} onClick={() => switchNumberTrInput(i)}>{content}</td>
)

export default TdClick