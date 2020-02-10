import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const HourListItem = ({ timeslots, label, onChangeTime, selectedTime }) => {
  const btnStyle = (date) => {
    return selectedTime === date ? 'kld-hli__timeslot-item-selected' : 'kld-hli__timeslot-item'
  }
  return (
    <div className="kld-hli">
      <span className="kld-hli__zone">{label}</span>
      <div className="kld-hli__timeslot">
        {timeslots.map((tsItem, index) => {
          const date = tsItem.value
          return (
            <button
              className={btnStyle(date)}
              disabled={!tsItem.available}
              key={index}
              onClick={() => onChangeTime(date)}>
              {moment(date).format('hh:mmA')}
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
