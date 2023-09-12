import React from 'react'
import Feature  from '../../components/feature/Feature'
import './whatGPT3.css'

const whatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt4'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature 
          title="What is GPT-4"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
          />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature 
          title="Write Emails & Chat Replies"
          text="ChatGPT can help you save time and effort by writing emails and chat replies for your work or business."
        />
        <Feature 
          title="Draft Contracts & Proposals"
          text="ChatGPT can help you create contracts and proposals more easily. This saves you time and effort because you don't have to start from scratch."
        />
        <Feature 
          title="Use Prompts & Commands"
          text="Explore our comprehensive resources and enhance your understanding of AI prompts and commands."
         />
      </div>
    </div>
  )
}

export default whatGPT3
