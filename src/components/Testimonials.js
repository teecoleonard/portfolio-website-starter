import React from 'react'

// import components

import TestimonialsSlider from '../components/TestimonialsSlider'

const Testimonials = () => {
  return (
    <section id='review' className='section bg-secondary'>
        <div class="container mx-auto">
            <div class="flex flex-col items-center text-center">
                <h2 className='section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block'>Oque as pessoas dizem</h2>
                <p className='subtitle'>Alguns dos comentários reais de pessoas que já fizeram sessões comigo</p>
            </div>
            <TestimonialsSlider />
        </div>
    </section>
  )
}

export default Testimonials