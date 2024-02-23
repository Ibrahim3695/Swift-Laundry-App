import React from 'react'
import "./Plan.css"

const Plan = () => {
  return (
    <div className='planMainDiv'>
      {/* <img src="./basket.png" alt="" /> */}
      <section className='planTopDiv'>
        <p>Choose A Business <span>Plan</span></p>
        <samp>Plan</samp>
      </section>
      <section className='planBottomDiv'>

        <article className='monthDiv'>
          <div className='MoneyContainer1'>
            <h1>#22,000/ month</h1>
            <h3>Monthly plan</h3>
            <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque ex, aliquam omnis dolor delectus .</h5>
          </div>
          <div className='MoneyContainer2'>
           <div className='Customer'>
           <h5>100% Customer Satisfaction</h5>
           </div>
            <div className='Pick'>
            <h5>Fast Pick and Delivery</h5>
            </div>
            <div className='Prices'>
            <h5>Affordable Prices</h5>
            </div>
            <div className='Affordable'>
            <h5>Affordable Prices</h5>
            </div>
            <div className='Affordable'>
            <h5>Affordable Prices</h5>
            </div>
          </div>
          <div className='MoneyContainer3'>
            <button className='choosePlanBtn'>Choose Plan</button>
          </div>
        </article>

        <article className='yearDiv'>
        <div className='MoneyContainer1'>
            <h1>#180,000/ year</h1>
            <h3>yearly plan</h3>
            <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque ex, aliquam omnis dolor delectus .</h5>
          </div>
          <div className='MoneyContainer2'>
           <div className='Customer'>
           <h5>100% Customer Satisfaction</h5>
           </div>
            <div className='Pick'>
            <h5>Fast Pick and Delivery</h5>
            </div>
            <div className='Prices'>
            <h5>Affordable Prices</h5>
            </div>
            <div className='Affordable'>
            <h5>Affordable Prices</h5>
            </div>
            <div className='Affordable'>
            <h5>Affordable Prices</h5>
            </div>
          </div>
          <div className='MoneyContainer3'>
            <button className='choosePlanBtn'>Choose Plan</button>
          </div>
        </article>

      </section>
    </div>
  )
}

export default Plan
