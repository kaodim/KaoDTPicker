import React, { PropTypes } from 'react'
import SurchargeArrow from './SurchargeArrow'

const SurchargeBanner = ({ label, surchargeGif }) => (
  <section className="kld-surcharge">
    {surchargeGif ? (
      <img src={surchargeGif} className="kld-surcharge__icon" />
    ) : (
      <SurchargeArrow className="kld-surcharge__icon" />
    )}

    <span className="kld-surcharge__label">{label}</span>
  </section>
  // <section className='d-flex flex-row warning-box-sidebar pl-s pr-m pv-m'>
  //   <i className='icon-wrap-small icon-surcharge mh-s' />
  //   <span className='pr-m text-sm text-warning-label'>{label}</span>
  // </section>
)

SurchargeBanner.defaultProps = {
  label: '',
  surchargeGif: ''
}

SurchargeBanner.propTypes = {
  label: PropTypes.string,
  surchargeGif: PropTypes.string
}

export default SurchargeBanner
