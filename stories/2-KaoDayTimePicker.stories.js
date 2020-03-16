import React from 'react'

import Test from '../src/components/Test'
import Kaolendar from '../src/index'
import SurchargeBanner from '../src/components/SurchargeBanner'

import {
  calendarMonths,
  calTimeslots,
  metaCalendarMonths,
  metaCalTimeslots
} from '../src/constants/mock'

export default {
  title: 'Kao-DayTimePicker'
}

export const test = () => <Test />

export const dayTimePicker = () => (
  <Kaolendar
    calendarMonths={calendarMonths}
    dpBannerText={'Indicates high demand fee (RM)'}
    hasTimePicker
    metaSurchargable={metaCalendarMonths.surchargable}
    metaTimeSurchargable={metaCalTimeslots.surchargable}
    timeslots={calTimeslots}
    value={'2020-01-20T07:00:00.000+08:00'}
  />
)

export const vendorDayTimePicker = () => (
  <Kaolendar
    calendarMonths={calendarMonths}
    disableBannerIcon
    dpBannerText={'This is for vendor but no surcharge logo'}
    hasTimePicker
    metaSurchargable
    timeslots={calTimeslots}
  />
)

export const surchargeBanner = () => <SurchargeBanner label={'This is surcharge banner'} />

export const surchargeBannerWithoutIcon = () => (
  <SurchargeBanner disableIcon label={'This is surcharge banner without icon'} />
)

// import Kaolendar from '../src/index'

// export const dt = () => <Kaolendar />

// dt.story = {
//   name: 'with Kaolendar',
// };

// import React from 'react';

// import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';

// export default {
//   title: 'Button',
// };

// export const text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

// export const emoji = () => (
//   <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );

// emoji.story = {
//   name: 'with emoji',
// };
