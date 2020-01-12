import React, { PropTypes } from 'react'
import HourListItem from './HourListItem'

const HourList = ({ onChange, selectedTime, timeslots }) => {
  const slots = {
    morning: [],
    afternoon: [],
    evening: [],
    night: []
  }
  // Logic for spliting morning, afternoon and etc
  timeslots.map((ts) => {
    const time = new Date(ts.value)
    const hour = time.getHours()
    const minute = time.getMinutes()
    const minuteRep = minute === 30 ? 0.5 : 0
    const timeTotal = hour + minuteRep
    if (timeTotal <= 12) {
      slots.morning.push(ts)
    } else if (timeTotal <= 17) {
      slots.afternoon.push(ts)
    } else if (timeTotal <= 20) {
      slots.evening.push(ts)
    } else if (timeTotal <= 23) {
      slots.night.push(ts)
    }
  })
  return (
    <div className="kld-hourlist">
      {Object.keys(slots).map((zoneDay, index) => {
        return (
          <HourListItem
            key={index}
            label={zoneDay.toUpperCase()}
            onChangeTime={onChange}
            selectedTime={selectedTime}
            timeslots={slots[zoneDay]}
          />
        )
      })}
    </div>
  )
}
HourList.defaultProps = {
  onChange: () => {},
  selectedTime: '',
  timeslots: []
}

HourList.propTypes = {
  onChange: PropTypes.func,
  selectedTime: PropTypes.string,
  timeslots: PropTypes.array
}

export default HourList
