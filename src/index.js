import React, { Component, PropTypes } from 'react'
import moment from 'moment'

import MiniCal from './components/MiniCal'
import DayPicker from './components/DayPicker'
import TimePicker from './components/TimePicker'

import './styles/styles.scss'

class Kaolendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      daySurchargeLabel: '',
      isDayPickerOpen: false,
      isTimePickerOpen: false,
      selectedDate: this.props.value
    }
  }
  handleInputClick = () => {
    this.setState({ isDayPickerOpen: true })
  }

  handleInputChange = () => {}

  handleDPClose = () => {
    this.setState({ isDayPickerOpen: false })
  }

  handleTPClose = () => {
    this.setState({ isTimePickerOpen: false })
  }

  handleTPBack = () => {
    this.setState({
      isDayPickerOpen: true,
      isTimePickerOpen: false
    })
  }

  handleSelectDay = (selectedObj) => {
    console.log(selectedObj.date)
    const hasTimePicker = this.props.hasTimePicker
    this.setState({
      daySurchargeLabel: selectedObj.locTotalPrice,
      isDayPickerOpen: false,
      isTimePickerOpen: hasTimePicker,
      selectedDate: selectedObj.date
    })
    // Check hasTimePicker flag to complete user select day and time journey
    this.props.onChange(selectedObj)
    // if (hasTimePicker) {
    //   // this.fetchTimeslots(selectedObj.date)
    // } else {
    //   this.setState({ userSelectedDate: selectedObj.date })
    //   this.props.onChange(selectedObj)
    // }
  }

  handleSelectTime = (dateObj) => {
    this.setState({
      isDayPickerOpen: false,
      isTimePickerOpen: false,
      selectedDate: dateObj.date
    })
    this.props.onChange(dateObj)
  }

  render() {
    // const dateText = 'adsfsdf'
    const { daySurchargeLabel, isDayPickerOpen, isTimePickerOpen, selectedDate } = this.state
    const { calendarMonths, hasTimePicker, surchargeGif, timeslots } = this.props
    const dateText = () => {
      // selectedDate ? moment(selectedDate).format('ddd, DD MMM YYYY, h:mm A') : ''
      let dText = ''
      selectedDate &&
        (dText = moment(selectedDate).format(
          hasTimePicker ? 'ddd, DD MMM YYYY, h:mm A' : 'ddd, DD MMM YYYY'
        ))
      // if (hasTimePicker) {
      //   selectedDate && (dText = moment(selectedDate).format('ddd, DD MMM YYYY, h:mm A'))
      // } else {
      //   selectedDate && (dText = moment(selectedDate).format('ddd, DD MMM YYYY'))
      // }
      return dText
    }
    return (
      <article>
        <section>
          <div className="kld">
            <input
              className="kld__input"
              onChange={() => {}}
              onClick={this.handleInputClick}
              placeholder={'Select a date'}
              value={dateText()}
            />
            <MiniCal className="kld__icon" />
          </div>
        </section>
        {isDayPickerOpen && (
          <DayPicker
            calendarMonths={calendarMonths}
            closeDP={this.handleDPClose}
            onChange={this.handleSelectDay}
            selectedDate={selectedDate}
            surchargeGif={surchargeGif}
          />
        )}
        {hasTimePicker && isTimePickerOpen && (
          <TimePicker
            backTP={this.handleTPBack}
            bannerPrice={daySurchargeLabel}
            closeTP={this.handleTPClose}
            onChange={this.handleSelectTime}
            selectedDate={selectedDate}
            surchargeGif={surchargeGif}
            timeslots={timeslots}
          />
        )}
      </article>
    )
  }
}

Kaolendar.defaultProps = {
  calendarMonths: [],
  hasTimePicker: false,
  onChange: () => {},
  surchargeGif: '',
  timeslots: [],
  value: ''
}

Kaolendar.propTypes = {
  calendarMonths: PropTypes.array,
  hasTimePicker: PropTypes.bool,
  onChange: PropTypes.func,
  surchargeGif: PropTypes.string,
  timeslots: PropTypes.array,
  value: PropTypes.string
}

export default Kaolendar
