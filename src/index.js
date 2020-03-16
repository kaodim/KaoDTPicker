import React, { Component, PropTypes } from 'react'
import moment from 'moment'

import MiniCal from './components/MiniCal'
import SurchargeArrow from './components/SurchargeArrow'
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
      selectedDate: this.props.value,
      totalSurchargeAmountText: '',
      userHasCompleted: true
    }
  }
  handleInputClick = () => {
    this.setState({ isDayPickerOpen: true, selectedDate: '', userHasCompleted: false })
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
    const hasTimePicker = this.props.hasTimePicker
    this.setState({
      daySurchargeLabel: selectedObj.locTotalPrice,
      isDayPickerOpen: false,
      isTimePickerOpen: hasTimePicker,
      selectedDate: selectedObj.date
    })
    // Check hasTimePicker flag to complete user select day and time journey
    if (hasTimePicker) {
      this.setState({ userHasCompleted: false })
      selectedObj.userHasCompleted = false
      // this.handleOnChange(selectedObj, false)
    } else {
      this.setState({ userHasCompleted: true })
      this.props.onChange(selectedObj)
      selectedObj.userHasCompleted = true
      // this.handleOnChange(selectedObj, true)
    }
    this.props.onChange(selectedObj)
  }

  handleOnChange = (selectedObj, userSelection) => {
    userSelection && this.props.onChange(selectedObj)
  }

  handleSelectTime = (dateObj) => {
    this.setState({
      isDayPickerOpen: false,
      isTimePickerOpen: false,
      selectedDate: dateObj.date,
      totalSurchargeAmountText: dateObj.locTotalPrice,
      userHasCompleted: true
    })
    dateObj.userHasCompleted = true
    this.props.onChange(dateObj)
  }

  render() {
    // const dateText = 'adsfsdf'
    const {
      daySurchargeLabel,
      isDayPickerOpen,
      isTimePickerOpen,
      selectedDate,
      totalSurchargeAmountText,
      userHasCompleted
    } = this.state
    const {
      calendarMonths,
      disableBannerIcon,
      dpBannerText,
      hasTimePicker,
      metaSurchargable,
      metaTimeSurchargable,
      surchargeGif,
      timeslots
    } = this.props
    const dateText = () => {
      // selectedDate ? moment(selectedDate).format('ddd, DD MMM YYYY, h:mm A') : ''
      // TODO: To refactor this weird logic
      let dText = ''
      selectedDate &&
        (dText = moment(selectedDate).format(
          hasTimePicker ? 'ddd, DD MMM YYYY, h:mm A' : 'ddd, DD MMM YYYY'
        ))
      !userHasCompleted && (dText = '') // Check user has completed selection
      return dText
    }
    let tpBannerText = dpBannerText
    let showTotalSurchargeText = userHasCompleted && totalSurchargeAmountText
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
        {showTotalSurchargeText && (
          <section className="kld__surcharge">
            <SurchargeArrow className="kld-surcharge__icon" />
            <span className="kld__surcharge-text">{`${totalSurchargeAmountText} surcharge`}</span>
          </section>
        )}
        {isDayPickerOpen && (
          <DayPicker
            bannerText={dpBannerText}
            calendarMonths={calendarMonths}
            closeDP={this.handleDPClose}
            disableBannerIcon={disableBannerIcon}
            metaSurchargable={metaSurchargable}
            onChange={this.handleSelectDay}
            selectedDate={selectedDate}
            surchargeGif={surchargeGif}
          />
        )}
        {hasTimePicker && isTimePickerOpen && (
          <TimePicker
            backTP={this.handleTPBack}
            bannerText={tpBannerText}
            bannerPrice={daySurchargeLabel}
            closeTP={this.handleTPClose}
            metaTimeSurchargable={metaTimeSurchargable}
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
  disableBannerIcon: false,
  dpBannerText: '',
  hasTimePicker: false,
  metaSurchargable: false,
  metaTimeSurchargable: false,
  onChange: () => {},
  surchargeGif: '',
  timeslots: [],
  value: ''
}

Kaolendar.propTypes = {
  calendarMonths: PropTypes.array,
  disableBannerIcon: PropTypes.bool,
  dpBannerText: PropTypes.string,
  hasTimePicker: PropTypes.bool,
  metaSurchargable: PropTypes.bool,
  metaTimeSurchargable: PropTypes.bool,
  onChange: PropTypes.func,
  surchargeGif: PropTypes.string,
  timeslots: PropTypes.array,
  value: PropTypes.string
}

export default Kaolendar
