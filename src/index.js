import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import MiniCal from './components/MiniCal'
import { calendarMonths, metaCalendarMonths } from './constants/mock'
import './styles/styles.scss'

class Kaolendar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <article>
        <section>
          <input className="kld__inputs" />
          <MiniCal />
        </section>
        {calendarMonths.map((cm) => {
          return <p>{cm.month}</p>
        })}
      </article>
    )
  }
}

export default Kaolendar
