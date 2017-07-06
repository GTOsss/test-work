import React from 'react'
import localStorageMod from '../../modules/local-storage'
import cx from 'classnames'

import styles from '../../styles/control-panel-local-storage.scss'

class ControlPanelLocalStorage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isShow : false}
  }

  clearLocalStorage = () => {
    localStorageMod.clear()
    this.props.updateTable()
  }

  toggle = () => this.setState({isShow: !this.state.isShow})

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={this.state.isShow ? styles.controlPanel : styles.controlPanelHide }
              onClick={!this.state.isShow ? () => {this.toggle()} : null}>
          <p>Control Panel localStorage</p>
          <button className="btn btn-default btn-md btn-block"
                  onClick={() => this.toggle()}>{this.state.isShow ? 'Hide' : 'Show'}</button>
          <button className="btn btn-default btn-md btn-block"
                  onClick={() => this.clearLocalStorage()}>Clear</button>
        </div>
      </div>
    )
  }
}

export default ControlPanelLocalStorage