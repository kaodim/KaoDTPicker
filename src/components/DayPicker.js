import React, { Component, PropTypes } from 'react'

import HeaderClose from './HeaderClose'

class DayPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <section className="kld-test">
        <div className="kld-daypicker">
          <div className="kld-daypicker__header">
            <label className="kld-daypicker__header-title">Select Date</label>
            <HeaderClose className="kld-daypicker__header-close" />
          </div>
          <div>
            <span>another</span>
          </div>
        </div>
      </section>
    )
  }
}

DayPicker.defaultProps = {
  calendarMonths: []
}

DayPicker.propTypes = {
  calendarMonths: PropTypes.array
}

export default DayPicker
