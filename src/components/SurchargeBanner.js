import React from 'react'
import PropTypes from 'prop-types'
import SurchargeArrow from './SurchargeArrow'
import RebateArrow from './RebateArrow'

const SurchargeBanner = ({
  disableIcon,
  isRebatable,
  isSurchargable,
  label,
  rebateLabel,
  surchargeGif,
  surchargeLabel
}) => {
  if (disableIcon) {
    return (
      <section className="kld-surcharge">
        <span className="kld-surcharge__label">{label}</span>
      </section>
    )
  }
  return (
    <section className="kld-surcharge">
      {isSurchargable && (
        <div className="kld-surcharge__body">
          <SurchargeIcon gif={surchargeGif} />
          <span className="kld-surcharge__label">{surchargeLabel}</span>
        </div>
      )}
      {isRebatable && (
        <div className="kld-surcharge__body">
          <RebateIcon gif={surchargeGif} />
          <span className="kld-surcharge__label">{rebateLabel}</span>
        </div>
      )}
    </section>
  )
}

const SurchargeIcon = ({ gif }) => {
  if (!gif) {
    return <SurchargeArrow className="kld-surcharge__icon" />
  }
  return <img src={gif} className="kld-surcharge__icon" />
}

const RebateIcon = ({ gif }) => {
  if (!gif) {
    return <RebateArrow className="kld-surcharge__icon" />
  }
  return <img src={gif} className="kld-surcharge__icon" />
}

// SurchargeIcon props
SurchargeIcon.defaultProps = {
  gif: ''
}

SurchargeIcon.propTypes = {
  gif: PropTypes.string
}

// RebateIcon props
RebateIcon.defaultProps = {
  gif: ''
}

RebateIcon.propTypes = {
  gif: PropTypes.string
}

// SurchargeBanner props
SurchargeBanner.defaultProps = {
  disableIcon: false,
  isRebatable: false,
  isSurchargable: false,
  label: '',
  rebateLabel: '',
  surchargeGif: '',
  surchargeLabel: ''
}

SurchargeBanner.propTypes = {
  disableIcon: PropTypes.bool,
  isRebatable: PropTypes.bool,
  isSurchargable: PropTypes.bool,
  label: PropTypes.string,
  rebateLabel: PropTypes.string,
  surchargeGif: PropTypes.string,
  surchargeLabel: PropTypes.string
}

export default SurchargeBanner
