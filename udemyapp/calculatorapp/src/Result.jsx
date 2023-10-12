import React from 'react'
import PropTypes from 'prop-types'

const Result = props => {
    const {operacion, calculo} = props;
    
  return (
    <div>
        <br />
        <span>{operacion}: {calculo}</span>
        <br />
    </div>
  )
}

Result.propTypes = {
    operacion:PropTypes.string,
    calculo: PropTypes.number
}

export default Result