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
        <p>The release of GPT-4 is a significant milestone in the development of artificial intelligence. The model's capabilities are truly impressive, and it is likely to have a profound impact on the way we live, work, and interact with the world around us. As GPT-4 continues to develop, we can expect to see even more amazing things in the years to come.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibilty
