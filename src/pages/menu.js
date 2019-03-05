import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Starter from '../components/food-menu/Starter'
import Momo from '../components/food-menu/Momo'
import Tandori from '../components/food-menu/Tandori'
import Curry from '../components/food-menu/Curry'
import TikaMasala from '../components/food-menu/TikaMasala'
import Sides from '../components/food-menu/Sides'
import Bubbles from '../components/drinks-menu/Bubbles'
import White from '../components/drinks-menu/White'
import Red from '../components/drinks-menu/Red'
import Beer from '../components/drinks-menu/Beer'
import Bevs from '../components/drinks-menu/Bevs'
import namaste from '../assets/images/namaste.svg'

const Menu = props => (
  <Layout>
    <Helmet>
      <title>Menu - Himalayan Sherpa Kitchen St. Helena, CA</title>
      <meta name="description" content="Himalayan Sherpa Kitchen - Menu" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Menu</h1>
          </header>
          <h3 className="align-center">From the kitchen:</h3>
          <Starter />
          <Momo />
          <Curry />
          <Tandori />
          <TikaMasala />
          <Sides />
          <hr />
          <h3 className="align-center">From the bar:</h3>
          <Bubbles />
          <White />
          <Red />
          <Beer />
          <Bevs />

          <div className="box align-center">
            <p>
              We offer you a hearty welcome to the exotic flavors of the
              Himalayan cuisine! Your taste is our specialty and your pleasure
              our courtesy. (v) Indicates Vegan dishes Due to California
              statewide water restrictions, water service is offered by request
              only.
            </p>
            <ul className="alt">
              <li>
                1148 Main Street, <br /> St. Helena, CA 94574 <br /> Phone:
                (707) 963-4439
              </li>
              <li>
                18% Service Charge may be added to parties of 6 or more. We do To
                Go and Catering for your private events. Thank you for dining
                with us. See you soon.
              </li>
            </ul>
            <img
              className="image namaste"
              src={namaste}
              alt="Namaste from himalayan sherpa kitchen"
            />
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default Menu
