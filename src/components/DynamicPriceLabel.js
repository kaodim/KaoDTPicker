import React, { PropTypes } from 'react'

import SurchargeArrow from './SurchargeArrow'
import RebateArrow from './RebateArrow'

const DynamicPriceLabel = ({ amount, locAmount }) => {
  let textColor = ''
  let dynPriceType = ''
  let dynIcon = () => {}
  const isNegative = amount < 0
  // Check surcharge amount
  if (!amount || !locAmount) {
    return null
  }
  // Check dynamic price
  if (isNegative) {
    textColor = 'kld-dyn-price__text--green'
    dynPriceType = 'rebate'
    dynIcon = () => <RebateArrow className="kld-dyn-price__icon" />
  } else if (!isNegative) {
    textColor = 'kld-dyn-price__text--red'
    dynPriceType = 'surcharge'
    dynIcon = () => <SurchargeArrow className="kld-dyn-price__icon" />
  }
  return (
    <div className="kld-dyn-price">
      {dynIcon()}
      <span className={textColor}>{`${locAmount} ${dynPriceType}`}</span>
    </div>
  )
}

DynamicPriceLabel.defaultProps = {
  amount: 0,
  locAmount: ''
}

DynamicPriceLabel.propTypes = {
  amount: PropTypes.number,
  locAmount: PropTypes.string
}

export default DynamicPriceLabel
