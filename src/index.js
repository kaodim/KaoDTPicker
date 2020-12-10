import React, { Component, PropTypes } from 'react'
import moment from 'moment'

import MiniCal from './components/MiniCal'
import SurchargeArrow from './components/SurchargeArrow'
import DayPicker from './components/DayPicker'
import TimePicker from './components/TimePicker'
import DynamicPriceLabel from './components/DynamicPriceLabel'

import './styles/styles.scss'

class Kaolendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      daySurchargeLabel: '',
      isDayPickerOpen: false,
      isTimePickerOpen: false,
      selectedDate: this.props.value,
      totalPrice: this.props.totalPrice,
      totalSurchargeAmountText: this.props.totalSurchargeAmountText,
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
      selectedDate: selectedObj.date,
      totalSurchargeAmountText: selectedObj.locTotalPrice
    })
    // Check hasTimePicker flag to complete user select day and time journey
    if (hasTimePicker) {
      this.setState({ userHasCompleted: false })
      selectedObj.userHasCompleted = false
      // this.handleOnChange(selectedObj, false)
    } else {
      this.setState({
        totalPrice: selectedObj.totalPrice,
        totalSurchargeAmountText: selectedObj.locTotalPrice,
        userHasCompleted: true
      })
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
      totalPrice: dateObj.totalPrice,
      totalSurchargeAmountText: dateObj.locTotalPrice,
      userHasCompleted: true
    })
    dateObj.userHasCompleted = true
    this.props.onChange(dateObj)
  }

  render() {
    const {
      daySurchargeLabel,
      isDayPickerOpen,
      isTimePickerOpen,
      selectedDate,
      totalPrice,
      totalSurchargeAmountText,
      userHasCompleted
    } = this.state
    const {
      calendarMonths,
      disableBannerIcon,
      dpBannerRebateText,
      dpBannerSurchargeText,
      dpBannerText,
      hasTimePicker,
      metaRebatable,
      metaSurchargable,
      metaTimeRebatable,
      metaTimeSurchargable,
      rebateGif,
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
    let tpBannerText = ''
    if (metaTimeRebatable && !metaTimeSurchargable) {
      tpBannerText = dpBannerRebateText
    } else if (!metaTimeRebatable && metaTimeSurchargable) {
      tpBannerText = dpBannerSurchargeText
    }
    let showTotalPriceText = userHasCompleted && !!(totalSurchargeAmountText || totalPrice)
    return (
      <article>
        <section>
          <div className="kld">
            <input
              className="kld__input"
              onChange={() => {}}
              onClick={this.handleInputClick}
              placeholder={'Say sth here for the examples'}
              value={dateText()}
            />
            <MiniCal className="kld__icon" />
          </div>
        </section>
        {showTotalPriceText && (
          <DynamicPriceLabel amount={totalPrice} locAmount={totalSurchargeAmountText} />
        )}
        {isDayPickerOpen && (
          <DayPicker
            bannerText={dpBannerText}
            bannerRebateText={dpBannerRebateText}
            bannerSurchargeText={dpBannerSurchargeText}
            calendarMonths={calendarMonths}
            closeDP={this.handleDPClose}
            disableBannerIcon={disableBannerIcon}
            metaRebatable={metaRebatable}
            metaSurchargable={metaSurchargable}
            onChange={this.handleSelectDay}
            rebateGif={rebateGif}
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
            metaTimeRebatable={metaTimeRebatable}
            metaTimeSurchargable={metaTimeSurchargable}
            onChange={this.handleSelectTime}
            rebateGif={rebateGif}
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
  dpBannerRebateText: '',
  dpBannerSurchargeText: '',
  dpBannerText: '',
  hasTimePicker: false,
  metaRebatable: false,
  metaSurchargable: false,
  metaTimeRebatable: false,
  metaTimeSurchargable: false,
  onChange: () => {},
  rebateGif: '',
  surchargeGif: '',
  timeslots: [],
  totalPrice: 0,
  totalSurchargeAmountText: '',
  value: ''
}

Kaolendar.propTypes = {
  calendarMonths: PropTypes.array,
  disableBannerIcon: PropTypes.bool,
  dpBannerRebateText: PropTypes.string,
  dpBannerSurchargeText: PropTypes.string,
  dpBannerText: PropTypes.string,
  hasTimePicker: PropTypes.bool,
  metaRebatable: PropTypes.bool,
  metaSurchargable: PropTypes.bool,
  metaTimeRebatable: PropTypes.bool,
  metaTimeSurchargable: PropTypes.bool,
  onChange: PropTypes.func,
  rebateGif: PropTypes.string,
  surchargeGif: PropTypes.string,
  timeslots: PropTypes.array,
  totalPrice: PropTypes.number,
  totalSurchargeAmountText: PropTypes.string,
  value: PropTypes.string
}

export default Kaolendar
