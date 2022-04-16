import React from 'react'

import './Heading.css'

const Heading = ({text}) => {
  return (
    <div className='heading'>
        <h2 className='heading-text capitalize'>{text}</h2>
        <hr className='heading-line'/>
    </div>
  )
}

export default Heading