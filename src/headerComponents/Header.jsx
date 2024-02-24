import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='HeaderMainDiv'>
      <section className='logoDiv'>
        <img src="./grace.png" alt="" className='swiftLaundryLogo'/>
      </section>
      <section className='writeUpDiv'>
        <ul>
          <li>Home</li>
          <li>Shops</li>
          <li>Offers</li>
          <li>Plans</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </section>

      <section className='btnDiv'>
        <button className='loginButton'>Login</button>
        <button className='signUpButton'>Sign up</button>
      </section>

      <section className='burgerIconImage'>
        <img src="./burger.png" alt="" />
      </section>
    </div>
  )
}

export default Header
