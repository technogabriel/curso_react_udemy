import React from 'react'
import './Card.css'
import propTypes from 'prop-types'


const Card = (props) => {
    const {lang, img, fcolor,scolor} = props;
  return (

        <div className="card" style={{
            background:`linear-gradient(to left, ${fcolor}, ${scolor})`
        }}>
            <img src={img} alt="lang.svg" />
            <h3>{lang}</h3>
        </div>
  )
}
// eslint-disable-next-line react/no-typos
Card.propTypes ={
    lang: propTypes.string,
    img:propTypes.string,
    fcolor: propTypes.string,
    scolor: propTypes.string
}

export default Card