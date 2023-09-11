import React from 'react'
import './possibilty.css'
import possibiltyImage from '../../assets/possibility.png'

const Possibilty = () => {
  return (
    <div className='gpt3__possibilty section__padding' id='possibilty'>
      <div className='gpt3__possibilty-image'>
        <img src={possibiltyImage} alt='possibilty'/>
      </div>
      <div className='gpt3__possibilty-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibilty
