import React, { Component, PropTypes } from 'react'
import moment from 'moment'

import MiniCal from './components/MiniCal'
import DayPicker from './components/DayPicker'

import './styles/styles.scss'

class Kaolendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDayPickerOpen: false
    }
  }
  handleInputClick = () => {
    console.log('handleInputClick called')
    // this.setState({ isDayPickerOpen: true })
  }
  render() {
    const dateText = 'adsfsdf'
    // const dateText = () => {
    //   userSelectedDate ? moment(userSelectedDate).format('ddd, DD MMM YYYY, h:mm A') : ''
    //   let dText = ''
    //   if (hasTimePicker) {
    //     userSelectedDate && (dText = moment(userSelectedDate).format('ddd, DD MMM YYYY, h:mm A'))
    //   } else {
    //     selectedDate && (dText = moment(selectedDate).format('ddd, DD MMM YYYY'))
    //   }
    //   return dText
    // }
    const { isDayPickerOpen } = this.state
    const { calendarMonths, surchargeGif } = this.props
    return (
      <article>
        <section>
          <div className="kld">
            <input className="kld__input" onClick={this.handleInputClick} value={dateText} />
            <MiniCal className="kld__icon" />
          </div>
        </section>
        <DayPicker calendarMonths={calendarMonths} surchargeGif={surchargeGif} />
      </article>
    )
  }
}

Kaolendar.defaultProps = {
  calendarMonths: [],
  hasTimePicker: false,
  surchargeGif: ''
}

Kaolendar.propTypes = {
  calendarMonths: PropTypes.array,
  hasTimePicker: PropTypes.bool,
  surchargeGif: PropTypes.string
}

export default Kaolendar
