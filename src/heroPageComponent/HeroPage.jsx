import React from 'react'
import "./HeroPage.css"
// import lanndingpic from "../../public/lanndingpic"

const HeroPage = () => {
  return (
    <div className='heroPageMainDiv'>
      <section className='leftDiv'>
        <article className='leftHold'>
          <h1>A Convenient solution for all your Laundry needs.</h1>
          <p>Discover a wide range of services tailored to your laundry needs. From wash-and-fold to dry cleaning, our trusted partners ensure impeccable results every time.</p>
          <button className='getStartedButton'>Get started</button>
        </article>
      </section>

      <section className='rightDiv'>
        <img src="lanndingpic.png" alt="" />
      </section>
    </div>
  )
}

export default HeroPage
