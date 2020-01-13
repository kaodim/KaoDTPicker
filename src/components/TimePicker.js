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

  handleHourChange = (hour) => {
    this.setState({ selectedTime: hour })
  }

  handleDoneClick = () => {
    const timeObj = {
      date: this.state.selectedTime,
      locTotalPrice: this.props.bannerPrice
    }
    this.props.onChange(timeObj)
  }

  render() {
    const { selectedTime } = this.state
    const { backTP, bannerPrice, closeTP, selectedDate, surchargeGif, timeslots } = this.props
    const bannerText = `${moment(selectedDate).format(
      'DD MMM (ddd)'
    )} has a surcharge of ${bannerPrice}`
    return (
      <section className="kld-daypicker__modal">
        <div className="kld-timepicker">
          <div className="kld-timepicker__header">
            <span className="kld-timepicker__header-title">{`Select time • ${moment(
              selectedDate
            ).format('DD MMM')}`}</span>
            <HeaderClose className="kld-timepicker__header-close" onClick={closeTP} />
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
            <button className="kld-timepicker__footer-btn-back" onClick={backTP}>
              Back
            </button>
            <button
              className="kld-timepicker__footer-btn-done"
              disabled={!selectedTime}
              onClick={this.handleDoneClick}>
              Done
            </button>
          </div>
        </div>
      </section>
    )
  }
}

TimePicker.defaultProps = {
  backTP: () => {},
  bannerPrice: '',
  closeTP: () => {},
  onChange: () => {},
  selectedDate: '',
  surchargeGif: '',
  timeslots: []
}

TimePicker.propTypes = {
  backTP: PropTypes.func,
  bannerPrice: PropTypes.string,
  closeTP: PropTypes.func,
  onChange: PropTypes.func,
  selectedDate: PropTypes.string,
  surchargeGif: PropTypes.string,
  timeslots: PropTypes.array
}

export default TimePicker
