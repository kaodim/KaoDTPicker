import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import SurchargeArrow from './SurchargeArrow'
import SurchargeArrowWhite from './SurchargeArrowWhite'

const HourListItem = ({ timeslots, label, onChangeTime, selectedTime }) => {
  const btnStyle = (date) => {
    return selectedTime === date ? 'kld-hli__timeslot-item-selected' : 'kld-hli__timeslot-item'
  }
  const surchargeTextStyle = (date) => {
    return selectedTime === date
      ? 'kld-hli__timeslot-surcharge-selected'
      : 'kld-hli__timeslot-surcharge'
  }
  let surchargeArrowStyle = (date) => {
    return selectedTime === date ? (
      <SurchargeArrowWhite />
    ) : (
      <SurchargeArrow className="kld-daypicker__date-surcharge-icon" />
    )
  }
  return (
    <div className="kld-hli">
      <span className="kld-hli__zone">{label}</span>
      <div className="kld-hli__timeslot">
        {timeslots.map((tsItem, index) => {
          const date = tsItem.value
          const localTotalPrice = tsItem.localized_total_price
          const showPrice = tsItem.show_price
          return (
            <button
              className={btnStyle(date)}
              disabled={!tsItem.available}
              key={index}
              onClick={() => onChangeTime(date, localTotalPrice, showPrice)}>
              <span>{moment(date).format('hh:mmA')}</span>
              {tsItem.surchargable && tsItem.show_price && (
                <div>
                  {surchargeArrowStyle(date)}
                  <span className={surchargeTextStyle(date)}>{tsItem.human_readable_price}</span>
                </div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

HourListItem.defaultProps = {
  label: '',
  onChangeTime: () => {},
  timeslots: [],
  selectedTime: ''
}

HourListItem.propTypes = {
  label: PropTypes.string,
  onChangeTime: PropTypes.func,
  timeslots: PropTypes.array,
  selectedTime: PropTypes.string
}

export default HourListItem
