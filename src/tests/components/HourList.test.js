import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'
import HourList from '../../components/HourList'
import calTimeslots from '../fixtures/calTimeslots'

let wrapper

beforeEach(() => {
  wrapper = shallow(<HourList timeslots={calTimeslots} />)
})

test('should render HourList correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should render correct amount of HourListItem', () => {
  const lenghtOfHourListItem = calTimeslots.length
  expect(wrapper.find('HourListItem').length).toBe(lenghtOfHourListItem)
})

test('should render HourList with selected date', () => {
  const now = moment().format()
  const onChangeSpy = jest.fn()
  wrapper.setProps({
    selectedTime: now,
    onChange: onChangeSpy(now)
  })
  expect(onChangeSpy).toHaveBeenLastCalledWith(now)
  expect(wrapper).toMatchSnapshot()
})
