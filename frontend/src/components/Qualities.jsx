import React from 'react'
import { data } from '../restApi.json'

// This Component is carousel //
const Qualities = () => {
  return (
    <>
      <section className='qualities' id='qualities'>
        <div className="container">
         
          <div class="carousel">
            <img src="https://media.istockphoto.com/id/1159751783/photo/organic-apricot-fruit-and-juice.jpg?s=612x612&w=0&k=20&c=_Y11iX3h0WOdEea0AYPihdBrd6gPXglDFJKkj4zEGew=" alt="Image 1" />
            <img src="Carousel-2.jpeg" alt="Image 2" />
            <img src="Carousel-3.jpeg" alt="Image 3" />
            <img src="Carousel-4.jpeg" alt="Image 4" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Qualities
