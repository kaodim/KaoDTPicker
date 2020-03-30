import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import HeaderClose from './HeaderClose'
import SurchargeBanner from './SurchargeBanner'
import HourList from './HourList'

class TimePicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bannerText: this.props.bannerText,
      selectedTime: '',
      showPrice: false,
      totalSurchargePrice: ''
    }
  }

  handleHourChange = (hour, locTotalPrice, showPrice) => {
    this.setState({ selectedTime: hour, showPrice, totalSurchargePrice: locTotalPrice })
    if (showPrice) {
      this.setState({
        bannerText: `${moment(hour).format('hh:mmA')} has a surcharge of ${locTotalPrice}`
      })
    } else {
      this.setState({
        bannerText: `${moment(hour).format('DD MMM (ddd)')} has a surcharge of ${locTotalPrice}`
      })
    }
  }

  handleDoneClick = () => {
    const timeObj = {
      date: this.state.selectedTime,
      locTotalPrice: this.state.totalSurchargePrice
    }
    this.props.onChange(timeObj)
  }

  render() {
    const { bannerText, selectedTime, showPrice, totalSurchargePrice } = this.state
    const {
      backTP,
      bannerPrice,
      closeTP,
      metaTimeSurchargable,
      selectedDate,
      surchargeGif,
      timeslots
    } = this.props
    return (
      <section className="kld-daypicker__modal">
        <div className="kld-timepicker">
          <div className="kld-timepicker__header">
            <span className="kld-timepicker__header-title">{`Select time • ${moment(
              selectedDate
            ).format('DD MMM')}`}</span>
            <HeaderClose className="kld-timepicker__header-close" onClick={closeTP} />
          </div>
          {metaTimeSurchargable && (
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
  bannerText: '',
  closeTP: () => {},
  metaTimeSurchargable: false,
  onChange: () => {},
  selectedDate: '',
  surchargeGif: '',
  timeslots: []
}

TimePicker.propTypes = {
  backTP: PropTypes.func,
  bannerPrice: PropTypes.string,
  bannerText: PropTypes.string,
  closeTP: PropTypes.func,
  metaTimeSurchargable: PropTypes.bool,
  onChange: PropTypes.func,
  selectedDate: PropTypes.string,
  surchargeGif: PropTypes.string,
  timeslots: PropTypes.array
}

export default TimePicker
