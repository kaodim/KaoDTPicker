import React, { Component, PropTypes } from 'react'
import moment from 'moment'
import { monthNames } from '../modules/constants'

import HeaderClose from './HeaderClose'
import SurchargeBanner from './SurchargeBanner'
import ChevronRight from './ChevronRight'
import ChevronLeft from './ChevronLeft'
import SurchargeArrow from './SurchargeArrow'

class DayPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // calendarMonths: this.props.calendarMonths,
      // calendarLength: this.props.calendarMonths.length,
      currentCalMonthArray: undefined,
      currentIndex: 0
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

  handleMonthChange(condition) {
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

  render() {
    const { currentIndex } = this.state
    const { calendarMonths, surchargeGif } = this.props
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
      <section className="kld-test">
        <div className="kld-daypicker">
          <div className="kld-daypicker__header">
            <label className="kld-daypicker__header-title">Select Date</label>
            <HeaderClose className="kld-daypicker__header-close" />
          </div>
          {curMonth.surchargable && (
            <div>
              <SurchargeBanner
                label={'Indicates high demand fee (RM)'}
                surchargeGif={surchargeGif}
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
          {dateItem(curMonth.days)}
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
  return (
    <div className="kld-daypicker__date">
      {concatDays.map((d, index) => {
        const cd = d ? new Date(d.value) : ''
        return (
          <button className={colorStyle(d.available)} key={index}>
            <span>{cd && cd.getDate()}</span>
            {d.show_price && (
              <div className="kld-daypicker__date-surcharge">
                <SurchargeArrow className="kld-daypicker__date-surcharge-icon" />
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
  calendarMonths: [],
  surchargeGif: ''
}

DayPicker.propTypes = {
  calendarMonths: PropTypes.array,
  surchargeGif: PropTypes.string
}

export default DayPicker
