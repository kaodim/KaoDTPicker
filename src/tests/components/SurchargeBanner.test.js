import React from 'react'
import { shallow } from 'enzyme'
import SurchargeBanner from '../../components/SurchargeBanner'
import SurchargeArrow from '../../components/SurchargeArrow'

let wrapper
const bannerText = 'Hello there.'

beforeEach(() => {
  wrapper = shallow(<SurchargeBanner />)
})

test('should render SurchargeBanner with svg', () => {
  expect(wrapper.find(SurchargeArrow).length).toBe(1)
})

test('should render SurchargeBanner with gif', () => {
  wrapper.setProps({
    surchargeGif: 'whatever.gif'
  })
  expect(wrapper.find('img').length).toBe(1)
})

test('should render SurchargeBanner without svg', () => {
  wrapper.setProps({
    disableIcon: true
  })
  expect(wrapper.find(SurchargeArrow).length).toBe(0)
})

test('should render SurchargeBanner with banner text', () => {
  wrapper.setProps({
    label: bannerText
  })
  expect(wrapper).toMatchSnapshot()
})

test('should render SurchargeBanner with banner text (no svg)', () => {
  wrapper.setProps({
    disableIcon: true,
    label: bannerText
  })
  expect(wrapper).toMatchSnapshot()
})
