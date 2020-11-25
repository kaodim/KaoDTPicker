import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import HeaderClose from './HeaderClose'
import DynamicPriceBanner from './DynamicPriceBanner'
import HourList from './HourList'

class TimePicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bannerText: this.props.bannerText,
      isRebatable: this.props.metaTimeRebatable,
      isSurchargable: this.props.metaTimeSurchargable,
      selectedTime: '',
      showPrice: false,
      totalSurchargePrice: ''
    }
  }

  handleHourChange = (
    hour,
    locTotalPrice,
    showPrice,
    isRebatable = false,
    isSurchargable = false
  ) => {
    // Check dynamic price type (surcharge/rebate)
    let dynamicPriceType = ''
    if (isSurchargable) {
      dynamicPriceType = 'surcharge'
    } else if (isRebatable) {
      dynamicPriceType = 'rebate'
    }
    this.setState({
      isRebatable,
      isSurchargable,
      selectedTime: hour,
      showPrice,
      totalSurchargePrice: locTotalPrice
    })
    if (showPrice) {
      this.setState({
        bannerText: `${moment(hour).format('hh:mmA')} has a ${dynamicPriceType} of ${locTotalPrice}`
      })
    } else {
      this.setState({
        bannerText: `${moment(hour).format(
          'DD MMM (ddd)'
        )} has a ${dynamicPriceType} of ${locTotalPrice}`
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
    const {
      bannerText,
      isRebatable,
      isSurchargable,
      selectedTime,
      showPrice,
      totalSurchargePrice
    } = this.state
    const {
      backTP,
      bannerPrice,
      closeTP,
      rebateGif,
      selectedDate,
      surchargeGif,
      timeslots
    } = this.props
    // const dynamicBannerText = (!isRebatable && !isSurchargable) ? this.props.bannerText : this.state.bannerText
    return (
      <section className="kld-daypicker__modal">
        <div className="kld-timepicker">
          <div className="kld-timepicker__header">
            <span className="kld-timepicker__header-title">{`Select time • ${moment(
              selectedDate
            ).format('DD MMM')}`}</span>
            <HeaderClose className="kld-timepicker__header-close" onClick={closeTP} />
          </div>
          {(isRebatable || isSurchargable) && (
            <div className="kld-timepicker__banner">
              <DynamicPriceBanner
                isRebatable={isRebatable}
                isSurchargable={isSurchargable}
                label={bannerText}
                rebateGif={rebateGif}
                rebateLabel={bannerText}
                surchargeGif={surchargeGif}
                surchargeLabel={bannerText}
              />
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
  metaTimeRebatable: false,
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
  metaTimeRebatable: PropTypes.bool,
  metaTimeSurchargable: PropTypes.bool,
  onChange: PropTypes.func,
  selectedDate: PropTypes.string,
  surchargeGif: PropTypes.string,
  timeslots: PropTypes.array
}

export default TimePicker
