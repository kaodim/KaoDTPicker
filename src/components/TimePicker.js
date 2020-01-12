import React, { Component, PropTypes } from 'react'
import moment from 'moment'

import HeaderClose from './HeaderClose'
import SurchargeBanner from './SurchargeBanner'
import HourList from './HourList'

class TimePicker extends Component {
  constructor(props) {
    super(props)
    this.state = { selectedTime: '' }
  }

  handleHourChange() {
    console.log('handleHourChange called')
    // this.setState({ selectedTime: hour })
  }

  render() {
    const { selectedTime } = this.state
    const { bannerPrice, selectedDate, surchargeGif, timeslots } = this.props
    const bannerText = `${moment(selectedDate).format(
      'DD MMM (ddd)'
    )} has a surcharge of ${bannerPrice}`
    return (
      <section className="kld-timepicker kld-test-2">
        <div className="kld-timepicker__header">
          <span className="kld-timepicker__header-title">{`Select time • ${moment(
            selectedDate
          ).format('DD MMM')}`}</span>
          <HeaderClose className="kld-timepicker__header-close" />
        </div>
        {bannerPrice && (
          <div className="kld-timepicker__banner">
            <SurchargeBanner label={bannerText} surchargeGif={surchargeGif} />
          </div>
        )}
        {/* ========== Timeslots Selection ========== */}
        <div>
          <HourList
            onChange={this.handleHourChange}
            selectedTime={selectedTime}
            timeslots={timeslots}
          />
        </div>
        <div className="kld-timepicker__footer">
          <button className="kld-timepicker__footer-btn-back">Back</button>
          <button className="kld-timepicker__footer-btn-done">Done</button>
        </div>
      </section>
    )
  }
}

TimePicker.defaultProps = {
  bannerPrice: '',
  selectedDate: '',
  surchargeGif: '',
  timeslots: []
}

TimePicker.propTypes = {
  bannerPrice: PropTypes.string,
  selectedDate: PropTypes.string,
  surchargeGif: PropTypes.string,
  timeslots: PropTypes.array
}

export default TimePicker
