import React from 'react'
import "./HeroPage.css"

const HeroPage = () => {
  return (
    <div className='heroPageMainDiv'>
      <section className='leftDiv'>
        <article className='leftHold'>
          <h1>A Convenient solution for all your Laundry needs.</h1>
          <p>Discover a wide range of services tailored to your laundry needs. From wash-and-fold to dry cleaning, our trusted partners ensure impeccable results every time.</p>
          <button className='getStartedButton'>Sign up</button>
        </article>
      </section>

      <section className='rightDiv'></section>
    </div>
  )
}

export default HeroPage
