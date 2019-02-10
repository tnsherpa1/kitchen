import React from 'react'
import namaste from '../assets/images/namaste.svg'
import { Link } from 'gatsby'
import yelp from '../assets/images/small_4_half.png'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner align-center">
      <header className="major">
        <h1>Himalayan Sherpa Kitchen, St. Helena, California</h1>
      </header>

      <div className="content">
        <img className="namaste" src={namaste} alt="Namaste from himalayan sherpa kitchen" />
        <p>
          We offer you a hearty welcome to the exotic flavors of the Himalayan
          cuisine! Your taste is our specialty and your pleasure our courtesy.
        </p>
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
        <ul className="icons">
            <li><a href="https://www.yelp.com/biz/st-helena-sherpa-kitchen-st-helena" target="_blank" rel="noopener noreferrer" className="icon alt fa-yelp"><span className="label">Yelp</span></a></li>
            <li><a href="https://www.yelp.com/biz/st-helena-sherpa-kitchen-st-helena" target="_blank" rel="noopener noreferrer"><img src={yelp} alt="yelp" /></a></li>
          </ul>
      </div>
    </div>
  </section>
)

export default Banner
