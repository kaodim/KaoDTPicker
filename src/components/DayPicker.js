import React, { Component, PropTypes } from 'react'
import moment from 'moment'
import { Modal } from 'react-bootstrap'
import { monthNames } from '../modules/constants'

import HeaderClose from './HeaderClose'
import SurchargeBanner from './SurchargeBanner'
import ChevronRight from './ChevronRight'
import ChevronLeft from './ChevronLeft'
import SurchargeArrow from './SurchargeArrow'
import SurchargeArrowWhite from './SurchargeArrowWhite'

class DayPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCalMonthArray: undefined,
      currentIndex: 0,
      selectedDate: ''
    }
  }

  componentDidMount() {
    this.handleSetDate()
  }

  handleSetDate = () => {
    const index = this.state.currentIndex
    const monthNowArray = this.props.calendarMonths[index]
    this.setState({ currentCalMonthArray: monthNowArray })
  }

  handleMonthChange = (condition) => {
    const checkMonthExist = this.props.calendarMonths[this.state.currentIndex]
    if (checkMonthExist) {
      if (condition === 'increase') {
        this.setState((prevState) => ({
          currentIndex: prevState.currentIndex + 1
        }))
      } else if (condition === 'decrease') {
        this.setState((prevState) => ({
          currentIndex: prevState.currentIndex - 1
        }))
      }
    }
  }

  handleDateSelect = (selectedDate, selectedLTPrice) => {
    this.setState({ selectedDate })
    const selectedObj = {
      date: selectedDate,
      locTotalPrice: selectedLTPrice
    }
    this.props.onChange(selectedObj)
  }
  render() {
    const { currentIndex } = this.state
    const {
      bannerText,
      calendarMonths,
      closeDP,
      disableBannerIcon,
      metaSurchargable,
      selectedDate,
      surchargeGif
    } = this.props
    const calendarLength = calendarMonths.length
    const weekdayShort = moment.weekdaysShort()
    const curMonth = calendarMonths && calendarMonths[currentIndex]
    const checkEndOfCal = (index, arrayLength) => {
      return arrayLength === index + 1
    }
    const checkStartOfCal = (index) => {
      return index === 0
    }
    if (!curMonth) {
      return null
    }
    return (
      <section className="kld-daypicker__modal">
        <div className="kld-daypicker">
          <div className="kld-daypicker__header">
            <label className="kld-daypicker__header-title">Select Date</label>
            <HeaderClose className="kld-daypicker__header-close" onClick={closeDP} />
          </div>
          {metaSurchargable && (
            <div>
              <SurchargeBanner
                label={bannerText}
                surchargeGif={surchargeGif}
                disableIcon={disableBannerIcon}
              />
            </div>
          )}
          {/* ========== Calendar Month Header ========== */}
          <div className="kld-daypicker__month">
            <button
              className="kld-daypicker__month-chevron"
              disabled={checkStartOfCal(currentIndex)}
              onClick={this.handleMonthChange.bind(this, 'decrease')}>
              <ChevronLeft />
            </button>
            {curMonth && (
              <span className="kld-daypicker__month-name">{`${monthNames[curMonth.month - 1]} ${
                curMonth.year
              }`}</span>
            )}
            <button
              className="kld-daypicker__month-chevron"
              disabled={checkEndOfCal(currentIndex, calendarLength)}
              onClick={this.handleMonthChange.bind(this, 'increase')}>
              <ChevronRight />
            </button>
          </div>
          {dayNameOfWeek(weekdayShort)}
          {/* ========== Day Items List ========== */}
          {dateItem(curMonth.days, selectedDate, this.handleDateSelect)}
        </div>
      </section>
    )
  }
}

const dayNameOfWeek = (dayName) => (
  <div className="kld-daypicker__dow">
    {dayName.map((day, index) => (
      <div className="kld-daypicker__dow-item" key={index}>
        {day.charAt(0)}
      </div>
    ))}
  </div>
)

const dateItem = (dates, selectedDate, handleDateSelect) => {
  let firstDayOfMonth = new Date(dates[0].value) // Check first day of the month to fill empty
  let emptyDays = Array(firstDayOfMonth.getDay()).fill('')
  let concatDays = emptyDays.concat(dates)
  let colorStyle = (available) => {
    return available ? 'kld-daypicker__date-item' : 'kld-daypicker__date-item-unavailable'
  }
  let colorStyleSelected = (dateNow) => {
    const selecteISO = new Date(selectedDate)
    return (
      dateNow &&
      (dateNow.getTime() === selecteISO.getTime() ? 'kld-daypicker__date-item-selected' : '')
    )
  }
  let surchargeColor = (dateNow) => {
    return colorStyleSelected(dateNow) ? (
      <SurchargeArrowWhite />
    ) : (
      <SurchargeArrow className="kld-daypicker__date-surcharge-icon" />
    )
  }
  return (
    <div className="kld-daypicker__date">
      {concatDays.map((d, index) => {
        const cd = d ? new Date(d.value) : ''
        return (
          <button
            className={`${colorStyle(d.available)} ${colorStyleSelected(cd)}`}
            disabled={!d.available}
            key={index}
            onClick={() => handleDateSelect(d.value, d.localized_total_price)}>
            <span>{cd && cd.getDate()}</span>
            {d.show_price && (
              <div className="kld-daypicker__date-surcharge">
                {surchargeColor(cd)}
                <span className="kld-daypicker__date-surcharge-price">
                  {d.human_readable_price}
                </span>
              </div>
            )}
          </button>
        )
      })}
    </div>
  )
}

DayPicker.defaultProps = {
  bannerText: '',
  calendarMonths: [],
  closeDP: () => {},
  disableBannerIcon: false,
  metaSurchargable: false,
  onChange: () => {},
  selectedDate: '',
  surchargeGif: ''
}

DayPicker.propTypes = {
  bannerText: PropTypes.string,
  calendarMonths: PropTypes.array,
  closeDP: PropTypes.func,
  disableBannerIcon: PropTypes.bool,
  metaSurchargable: PropTypes.bool,
  onChange: PropTypes.func,
  selectedDate: PropTypes.string,
  surchargeGif: PropTypes.string
}

export default DayPicker
