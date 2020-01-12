import React from 'react'

import Test from '../src/components/Test'
import Kaolendar from '../src/index'
import SurchargeBanner from '../src/components/SurchargeBanner'

import { calendarMonths, calTimeslots } from '../src/constants/mock'

export default {
  title: 'Kao-DayTimePicker'
}

export const test = () => <Test />

export const dayTimePicker = () => (
  <Kaolendar calendarMonths={calendarMonths} timeslots={calTimeslots} />
)

export const surchargeBanner = () => <SurchargeBanner label={'This is surcharge banner'} />

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
