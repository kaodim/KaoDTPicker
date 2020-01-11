import React, { PropTypes } from 'react'
import SurchargeArrow from './SurchargeArrow'

const SurchargeBanner = ({ label }) => (
  <section className="kld-surcharge">
    <SurchargeArrow className="kld-surcharge__icon" />
    <span className="kld-surcharge__label">{label}</span>
  </section>
  // <section className='d-flex flex-row warning-box-sidebar pl-s pr-m pv-m'>
  //   <i className='icon-wrap-small icon-surcharge mh-s' />
  //   <span className='pr-m text-sm text-warning-label'>{label}</span>
  // </section>
)

SurchargeBanner.defaultProps = {
  label: ''
}

SurchargeBanner.propTypes = {
  label: PropTypes.string
}

export default SurchargeBanner
