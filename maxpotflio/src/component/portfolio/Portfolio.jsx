import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
        <article className='portfolio_item-image'>
          
          <h3>This is a portfolio item title</h3>
          <a href='https://github.com' className='btn'>github</a>
          <a href='https://dribble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
      </div>

    </section>
  )
}

export default Portfolio