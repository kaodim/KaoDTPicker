import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import MiniCal from './components/MiniCal'
import './styles/styles.scss'

class Kaolendar extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    return (
      <article>
        <section>
          <input className='kld__inputs' />
          <MiniCal />
        </section>
      </article>
    )
  }
}

export default Kaolendar
