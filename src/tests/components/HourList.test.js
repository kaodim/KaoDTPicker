import React from 'react'
import { shallow } from 'enzyme'
import HourList from '../../components/HourList'
import calTimeslots from '../fixtures/calTimeslots'

let wrapper

beforeEach(() => {
  wrapper = shallow(<HourList timeslots={calTimeslots} />)
})

test('should render HourList correctly', () => {
  // expect(wrapper).toMatchSnapshot()
})

test('should render correct amount of HourListItem', () => {
  const lenghtOfHourListItem = calTimeslots.length
  expect(wrapper.find('HourListItem').length).toBe(lenghtOfHourListItem)
})

test('should render HourList with selected date', () => {
  const now = '2020-01-17T07:00:00.000+08:00'
  const onChangeSpy = jest.fn()
  wrapper.setProps({
    selectedTime: now,
    onChange: onChangeSpy(now)
  })
  expect(onChangeSpy).toHaveBeenLastCalledWith(now)
  // expect(wrapper).toMatchSnapshot()
})
