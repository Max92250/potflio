import React from 'react'
import './about.css'
import ME from '../../assests/me-about.jpg'

import {FiAward} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {VscProject} from 'react-icons/vsc'
const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt='' />
          </div>
        </div>
        <div className='about_content'>
          <div className="about_cards">
            <article className='about_card'>
              <FiAward className='about_icon'/>
              <h5>Expereince</h5>
              <small>3+years working</small>
            </article>
            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className='about_card'>
              <VscProject className='about_icon'/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt saepe consequuntur eligendi repudiandae voluptas aperiam quasi minima sed debitis necessitatibus explicabo sunt accusantium earum voluptate quidem, id fuga vero quam?</p>
          <a href='#contact' className='btn btn-primary '>Let's Talk</a>

        </div>
      
    </div>
    </section>

    
  )
}

export default about