import React, { PropTypes } from 'react'
import SurchargeArrow from './SurchargeArrow'

const SurchargeBanner = ({ disableIcon, label, surchargeGif }) => (
  <section className="kld-surcharge">
    {!disableIcon &&
      (surchargeGif ? (
        <img src={surchargeGif} className="kld-surcharge__icon" />
      ) : (
        <SurchargeArrow className="kld-surcharge__icon" />
      ))}

    <span className="kld-surcharge__label">{label}</span>
  </section>
)

SurchargeBanner.defaultProps = {
  disableIcon: false,
  label: '',
  surchargeGif: ''
}

SurchargeBanner.propTypes = {
  disableIcon: PropTypes.bool,
  label: PropTypes.string,
  surchargeGif: PropTypes.string
}

export default SurchargeBanner
