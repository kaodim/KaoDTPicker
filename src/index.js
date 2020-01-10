import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
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
          <img src='./icons/ic-minical.svg' />
        </section>
      </article>
    )
  }
}

export default Kaolendar
