import React from 'react'
import PropTypes from 'prop-types'
import SurchargeArrow from './SurchargeArrow'

const SurchargeBanner = ({ disableIcon, label, surchargeGif }) => {
  if (disableIcon) {
    return (
      <section className="kld-surcharge">
        <span className="kld-surcharge__label">{label}</span>
      </section>
    )
  }
  return (
    <section className="kld-surcharge">
      {surchargeGif ? (
        <img src={surchargeGif} className="kld-surcharge__icon" />
      ) : (
        <SurchargeArrow className="kld-surcharge__icon" />
      )}
      <span className="kld-surcharge__label">{label}</span>
    </section>
  )
}

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
