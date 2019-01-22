import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import everest from '../assets/images/everest-trek.jpeg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Himalayan Sherpa Kitchen - St. Helena</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <section id="one" className="spotlights">
                <section>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Everest Base Camp Trek</h3>
                            </header>
                            <p><span className="image left"><img src={everest} alt="everest trek"/></span><span>2018 Trekkers en route Mt. Everest Base Camp organized by the owner, Chiring Sherpa. Chiring leads a trip to Nepal every year. Tourists enjoy and fully immerse in the local culture and natural beauty along the route.</span></p>
                            <ul className="actions">
                                <li><Link to="/everest" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
     
            </section>
        </div>

    </Layout>
)

export default Landing