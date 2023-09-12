import React from 'react'
import './features.css'
import Feature from '../../components/feature/Feature'

const featuresData = [
  {
    title: "Multimodal capabilities" ,
    text: "GPT-4 can process and generate text, code, and images. This makes it a versatile tool for a variety of tasks, such as image captioning, translation, and code generation."
  },
  {
    title: "High degree of generalization" ,
    text: "GPT-4 is able to generalize to new tasks and domains with minimal training data. This makes it a valuable tool for research and development."
  },
  {
    title: "Reasoning and commonsense knowledge" ,
    text: "GPT-4 can reason about the world and apply commonsense knowledge to solve problems. This is a significant advance over previous language models, which were often brittle and unable to handle complex tasks."
  },
  {
    title: "Improved instruction following" ,
    text: "GPT-4 is able to follow instructions carefully and generate creative text formats. This makes it a powerful tool for creative writing, translation, and summarization."
  }
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item,index) => {
          return <Feature title={item.title} text={item.text} key={item.title + index}/>
        })}
      </div>
      
    </div>
  )
}

export default Features;
