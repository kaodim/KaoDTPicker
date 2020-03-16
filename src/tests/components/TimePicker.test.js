import React from 'react'
import { shallow } from 'enzyme'
import calTimeslots from '../fixtures/calTimeslots'
import TimePicker from '../../components/TimePicker'

let wrapper
const date1 = '2020-01-17T07:00:00.000+08:00'
const date2 = '2020-01-17T08:00:00.000+08:00'
const onChangeSpy = jest.fn()

describe('should render TimePicker correctly', () => {
  beforeEach(() => {
    wrapper = shallow(
      <TimePicker selectedDate={date1} timeslots={calTimeslots} onChange={onChangeSpy} />
    )
  })

  test('should match TimePicker snapshot with selectedDate', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test.skip('should show bannerPrice when there is bannerText', () => {
    wrapper.setProps({
      bannerPrice: 'RM10'
    })
    expect(wrapper.find('SurchargeBanner').length).toBe(1)
  })

  test('should call handleHourChange', () => {
    wrapper.find('HourList').prop('onChange')(date1)
    expect(wrapper.state('selectedTime')).toEqual(date1)
  })

  test('should disable Done button when timeslot has not selected yet', () => {
    expect(wrapper.find('button.kld-timepicker__footer-btn-done').props().disabled).toBe(true)
  })

  test('should call handleDoneClick when click on Done button', () => {
    const price = 'RM10'
    const onClickObj = {
      date: date2,
      locTotalPrice: price
    }
    wrapper.setState({ selectedTime: date2 })
    wrapper.setProps({ bannerPrice: price })
    wrapper.find('button.kld-timepicker__footer-btn-done').simulate('click')
    expect(onChangeSpy).toHaveBeenCalledWith(onClickObj)
  })

  test('should have defaultProps func', () => {
    wrapper.find('button.kld-timepicker__footer-btn-back').simulate('click')
    wrapper
      .find('HeaderClose')
      .props()
      .onClick('click')
    wrapper.find('button.kld-timepicker__footer-btn-back').simulate('click')
    expect(TimePicker.defaultProps.backTP).toBeDefined()
    expect(TimePicker.defaultProps.closeTP).toBeDefined()
  })
})
