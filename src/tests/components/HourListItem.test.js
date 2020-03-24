import React from 'react'
import { shallow } from 'enzyme'
import HourListItem from '../../components/HourListItem'
import calTimeslots from '../fixtures/calTimeslots'

let wrapper
const zone = 'MORNING'
const date1 = '2020-01-17T07:00:00.000+08:00'
const date2 = '2020-01-17T08:00:00.000+08:00'

beforeEach(() => {
  wrapper = shallow(<HourListItem />)
})

test('should render HourListItem correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

describe('should render HourListItem according to user interactions', () => {
  let spliceTimeslot = calTimeslots.splice(0, 1)
  beforeEach(() => {
    wrapper = shallow(<HourListItem label={zone} timeslots={spliceTimeslot} />)
  })

  test('should set selected class if props selectedtime is same', () => {
    wrapper.setProps({
      selectedTime: date1
    })
    expect(wrapper).toMatchSnapshot()
  })

  test('should set default class if props selectedtime is different', () => {
    wrapper.setProps({
      selectedTime: date2
    })
    expect(wrapper).toMatchSnapshot()
  })

  test('should call onChangeTime HourListItem', () => {
    const onChangeTimeSpy = jest.fn()
    wrapper.setProps({
      onChangeTime: onChangeTimeSpy(date1)
    })
    expect(onChangeTimeSpy).toHaveBeenLastCalledWith(date1)
  })

  test('should call onClick when clicking on timeslot', () => {
    const onClickSpy = jest.fn()
    const timeslot = spliceTimeslot[0]
    const date = timeslot.value
    const localPrice = timeslot.localized_total_price
    const showPrice = timeslot.show_price

    wrapper = shallow(
      <HourListItem onChangeTime={onClickSpy} label={zone} timeslots={spliceTimeslot} />
    )
    wrapper.find('button').simulate('click')
    expect(onClickSpy).toHaveBeenLastCalledWith(date, localPrice, showPrice)
    expect(wrapper).toMatchSnapshot()
  })

  test('should have default onChangeTime', () => {
    expect(wrapper.instance().props.onChangeTime).toBeDefined()
  })
})

describe('should render HourListItem(with price) according to user interactions', () => {
  let spliceTimeslot = calTimeslots.splice(1, 1)
  let date = spliceTimeslot[0].value
  beforeEach(() => {
    wrapper = shallow(<HourListItem label={zone} timeslots={spliceTimeslot} />)
  })

  test('should render default css styling', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should render correct css styling on selection', () => {
    wrapper.setProps({
      selectedTime: date
    })
    expect(wrapper).toMatchSnapshot()
  })
})
