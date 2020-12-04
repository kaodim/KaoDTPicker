import React from 'react'

import Kaolendar from '../src/index'
import DynamicPriceBanner from '../src/components/DynamicPriceBanner'

import {
  calendarMonths,
  calTimeslots,
  metaCalendarMonths,
  metaCalTimeslots
} from '../src/constants/mock'

export default {
  title: 'Kao-DayTimePicker'
}

export const dayTimePicker = () => (
  <Kaolendar
    calendarMonths={calendarMonths}
    dpBannerRebateText={'Rebate indication message'}
    dpBannerSurchargeText={'Surcharge indication message'}
    dpBannerText={'General message'}
    hasTimePicker
    metaSurchargable={metaCalendarMonths.surchargable}
    metaRebatable={metaCalendarMonths.rebatable}
    metaTimeRebatable={metaCalTimeslots.rebatable}
    metaTimeSurchargable={metaCalTimeslots.surchargable}
    timeslots={calTimeslots}
  />
)

export const dayTimePickerPreSelected = () => (
  <Kaolendar
    calendarMonths={calendarMonths}
    dpBannerRebateText={'Rebate indication message'}
    dpBannerSurchargeText={'Surcharge indication message'}
    dpBannerText={'General message'}
    hasTimePicker
    metaRebatable={metaCalendarMonths.rebatable}
    metaSurchargable={metaCalendarMonths.surchargable}
    metaTimeRebatable={metaCalTimeslots.rebatable}
    metaTimeSurchargable={metaCalTimeslots.surchargable}
    timeslots={calTimeslots}
    totalSurchargeAmountText={'RM33'}
    value={'2020-03-27T07:00:00.000+08:00'}
  />
)

export const dayPicker = () => (
  <Kaolendar
    calendarMonths={calendarMonths}
    dpBannerRebateText={'Rebate indication message'}
    dpBannerSurchargeText={'Surcharge indication message'}
    dpBannerText={'General message'}
    metaRebatable={metaCalendarMonths.rebatable}
    metaSurchargable={metaCalendarMonths.surchargable}
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

export const surchargeBanner = () => (
  <DynamicPriceBanner surchargeLabel={'This is surcharge banner'} isSurchargable />
)

export const rebateBanner = () => (
  <DynamicPriceBanner rebateLabel={'This is rebate banner'} isRebatable />
)

export const bothSurchageAndRebateBanner = () => (
  <DynamicPriceBanner
    isRebatable
    isSurchargable
    rebateLabel={'Also have rebate amount'}
    surchargeLabel={'This is surchage amount &'}
  />
)

export const DynamicPriceBannerWithoutIcon = () => (
  <DynamicPriceBanner disableIcon label={'This is surcharge banner without icon'} />
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
