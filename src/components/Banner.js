import React from 'react'
import namaste from '../assets/images/namaste.svg'
import { Link } from 'gatsby'
import Footer from './Footer'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner align-center">
      <header className="major">
        <h1>From the himalayas to the heart of wine country</h1>
      </header>

      <div className="content">
        <p>
          We offer you a hearty welcome to the exotic flavors of the Himalayan
          cuisine! Your taste is our specialty and your pleasure our courtesy.
        </p>
        <img className="namaste" src={namaste} alt="Namaste from himalayan sherpa kitchen" />
      </div>
      <div>
      <ul className="actions">
        <li>
          <Link to ="/menu" className="button scrolly">
            View the Menu
          </Link>
        </li>
      </ul>
      </div>
      <div id="footer">
        <ul className="alt">
          <li>Hours:</li>
          <li>Lunch: 11:30am to 3:00pm (Daily except Tuesdays)</li>
          <li>Dinner: 5:00pm to 9:00pm (Daily except Tuesdays)</li>
          <li>Closed on Tuesdays</li>
        </ul>
        <Footer />
      </div>
    </div>
  </section>
)

export default Banner
