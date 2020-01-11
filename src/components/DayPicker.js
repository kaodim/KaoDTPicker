import React, { Component, PropTypes } from 'react'

class DayPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <h5>This is daypicker</h5>
      </div>
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
