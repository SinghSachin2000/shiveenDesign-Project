import './Landingpage.css'
import React from 'react'
import photo1 from '../images/FINAL DESIGN.jpg'
import photo2 from '../images/1.jpg'
import photo3 from '../images/photo3.jpg'
import Choose from './Choose'

function Landingpage(){
    return (
        <div className='wrapper'>

        <section className='topHeader'>
        <div className='name'>SHIVEEN DESIGN</div>
        <div className='theme'></div>
        <div className='overimage'></div>
        </section>

        <section className='descriptionSection'>
        <div className='description'>Interior Design Doesn't Have to Be Expensive or Complicated! It Should Be Smart & User Friendly</div>
        </section>

        <section className='img-slidder'>
        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
  
    <div class="carousel-item active">
      <img src={photo2} class="d-block" alt="..." loading='lazy'/>
    </div>
      <div class="carousel-item">
      <img src={photo1} class="d-block" alt="..." loading='lazy'/>
    </div>
    <div class="carousel-item">
      <img src={photo3} class="d-block" alt="..." loading='lazy'/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </section>
<section>
<Choose></Choose>
</section>
 
        </div>
    );
}
export default Landingpage;