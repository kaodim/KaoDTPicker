import React, { Component, PropTypes } from 'react'
import moment from 'moment'

import HeaderClose from './HeaderClose'
import SurchargeBanner from './SurchargeBanner'

class TimePicker extends Component {
  constructor(props) {
    super(props)
    this.state = { selectedTime: '' }
  }
  render() {
    const { bannerPrice, selectedDate, surchargeGif } = this.props
    const bannerText = `${moment(selectedDate).format(
      'DD MMM (ddd)'
    )} has a surcharge of ${bannerPrice}`
    return (
      <section className="kld-timepicker kld-test-2">
        <div className="kld-timepicker__header">
          <span className="kld-timepicker__header-title">Select time • 16 Nov</span>
          <HeaderClose className="kld-timepicker__header-close" />
        </div>
        {bannerPrice && (
          <div className="kld-timepicker__banner">
            <SurchargeBanner label={bannerText} surchargeGif={surchargeGif} />
          </div>
        )}
        {/* ========== Timeslots Selection ========== */}
        <div>
          <span>adsfsadf</span>
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
  surchargeGif: ''
}

TimePicker.propTypes = {
  bannerPrice: PropTypes.string,
  selectedDate: PropTypes.string,
  surchargeGif: PropTypes.string
}

export default TimePicker
