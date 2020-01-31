import React from 'react'
import { shallow } from 'enzyme'
import Test from '../../components/Test'

test('should render Test correctly', () => {
  const wrapper = shallow(<Test />)
  // expect(wrapper.find('span').length).toBe(1)
  expect(wrapper).toMatchSnapshot()
})
