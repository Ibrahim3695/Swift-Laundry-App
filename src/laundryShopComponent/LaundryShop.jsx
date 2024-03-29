import React from 'react'
import "./LaundryShop.css"

const LaundryShop = () => {
  return (
    <div className='laundryShopMainDiv'>
      <section className='laundryTopDiv'>
        <p>Shops Around You</p>
        <samp>Laundry Shops</samp>
      </section>
      <section className='laundryBottomDiv'>

        {/* <main> */}
          <article className='pickUpDivs'>
            <div className='pickUpLogos'>
              <img src="./wash1.png" alt="" className='wash1'/>
            </div>
            <h2>Cleaneat Laundry</h2>
            <p>161,muyibi,olodi Apapa.</p>
            <h5>34km Away</h5>
            <button className='BTN1'>View</button>
          </article>

          <article className='washDivs'>
            <div className='washLogos'>
            <img src="./wash2.png" alt="" className='wash1'/>
            </div>
            <h2>LaundryMann</h2>
            <p>162,muyibi,olodi Apapa</p>
            <h5>70km Away</h5>
            <button className='BTN2'>View</button>
          </article>

          <article className='deliverDivs'>
            <div className='deliverLogos'>
            <img src="./wash3.png" alt="" className='wash1'/>
            </div>
            <h2>True Wash</h2>
            <p>161,muyibi,olodi Apapa</p>
            <h5>85km Away</h5>
            <button className='BTN3'>View</button>
          </article>

        {/* </main> */}
      </section>
      <p className='absolute1'>View more</p>

    </div>
  )
}

export default LaundryShop
