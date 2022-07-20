import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
const experience = () => {
  return (
   <section id='experience'>
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>
    <div className='container experience_container'>
      
      <div className='experience_frontend'>
      <h3>Frontend Developement</h3>
      <div className='experience_content'>
        <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details_icons'/>
         <div>
         <h4>HTML</h4>
          <small className='text-light'>Experienced</small>

         </div>
        </article>
        <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details_icons'/>
         <div>
         <h4>CSS</h4>
          <small className='text-light'>Experienced</small>

         </div>
        </article>
        <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details_icons'/>
          <div>
          <h4>JAVASCRIPT</h4>
          <small className='text-light'>Experienced</small>

          </div>
        </article>
        <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details_icons'/>
          <div>
          <h4>REACT</h4>
          <small className='text-light'>Experienced</small>
          </div>

      
  
        </article>
        <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details_icons'/>
<div>
<h4>BOOTSTRAP</h4>
          <small className='text-light'>Experienced</small>

</div>
        </article>
        <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details_icons'/>
          <div>
          <h4>TAILWIND</h4>
          <small className='text-light'>Experienced</small>

          </div>
        </article>
        </div>
      </div>
      <div className='experience_backend'>
    <h3>Backend Developement</h3>
      <div className='experience_content'>
        <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details_icons'/>
         <div>
         <h4>NODE JS</h4>
          <small className='text-light'>Experienced</small>

         </div>
        </article>
        <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details_icons'/>
          <div>
          <h4>MONGODB</h4>
          <small className='text-light'>Intermediate</small>
</div>
        </article>
        <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details_icons'/>
         <div>
         <h4>PHP</h4>
          <small className='text-light'>Experienced</small>

         </div>
        </article>
        <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details_icons'/>
         <div>
         <h4>MYSQL</h4>
          <small className='text-light'>intermediate</small>

         </div>
        </article>
        <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details_icons'/>
         <div>
         <h4>PYTHON</h4>
          <small className='text-light'>Experienced</small>

         </div>
        </article>

      </div>
      </div>

    </div>
    
      

    
   </section>
  )
}

export default experience