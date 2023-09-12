import React from 'react'
import './blog.css'
import {Article} from '../../components'
import {blog01, blog02, blog03, blog04, blog05} from './imports'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgURL={blog01} date="Sep 2, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imgURL={blog02} date="Sep 7, 2023" title="API Integration and Custom Solutions"/>
          <Article imgURL={blog03} date="Sep 9, 2023" title="Multilingual Communication"/>
          <Article imgURL={blog04} date="Sep 10, 2023" title="Mastering the Written Word"/>
          <Article imgURL={blog05} date="Sep 13, 2023" title="Collaborative AI Integration"/>
        </div>

      </div>
    </div>
  )
}

export default Blog
