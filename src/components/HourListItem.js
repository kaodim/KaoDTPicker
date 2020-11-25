import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import SurchargeArrow from './SurchargeArrow'
import SurchargeArrowWhite from './SurchargeArrowWhite'
import RebateArrow from './RebateArrow'
import RebateArrowWhite from './RebateArrowWhite'

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
  let rebateArrowStyle = (date) => {
    return selectedTime === date ? (
      <RebateArrowWhite />
    ) : (
      <RebateArrow className="kld-daypicker__date-surcharge-icon" />
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
          const isRebatable = tsItem.rebatable
          const isSurchargable = tsItem.surchargable
          return (
            <button
              className={btnStyle(date)}
              disabled={!tsItem.available}
              key={index}
              onClick={() =>
                onChangeTime(date, localTotalPrice, showPrice, isRebatable, isSurchargable)
              }>
              <span>{moment(date).format('hh:mmA')}</span>
              {tsItem.show_price && (
                <div>
                  {tsItem.surchargable && surchargeArrowStyle(date)}
                  {tsItem.rebatable && rebateArrowStyle(date)}
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
