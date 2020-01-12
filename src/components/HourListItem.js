import React, { PropTypes } from 'react'
import moment from 'moment'

const HourListItem = ({ timeslots, label, onChangeTime, selectedTime }) => {
  return (
    <div className="kld-hli">
      <span className="kld-hli__zone">{label}</span>
      <div className="kld-hli__timeslot">
        {timeslots.map((tsItem, index) => {
          const date = tsItem.value
          return (
            <button
              className="kld-hli__timeslot-item"
              disabled={!tsItem.available}
              key={index}
              onClick={onChangeTime}>
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
