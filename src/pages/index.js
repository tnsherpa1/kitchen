import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/himalayan-sherpa-kitchen-inside.jpg'
import pic02 from '../assets/images/himalayan-sherpa-kitchen-catering.jpg'
import pic03 from '../assets/images/himalayan-sherpa-kitchen-dining.jpg'
import pic04 from '../assets/images/samosas.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Sherpa Kitchen - St. Helena"
                    meta={[
                        { name: 'description', content: 'Best Indian, Nepalese, Tibetan restaurant in St. Helena, CA' },
                        { name: 'keywords', content: 'indian restaurant in st. helena, indian food-st. helena, indian cuisine-st. helena, himalayan kitchen- st. helena, himalayas- st. helena, sherpa kitchen- st. helena, st. helena lunch' }, 
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>The Story</h2>
                            </header>
                            <p>Himalayan Sherpa Kitchen is owned by the joint partnership of Chhiring and Nima Sherpa who met in their early twenties and quickly became friends. Nima manages at the popular local restaurant of Sonoma, Meritage Martini Oyster Bar. Both began as trekking guides in Nepal and upon arriving in beautiful wine country became quickly emerged in the restaurant business. Their experience in restaurant managing along with their friendly easy going personalities makes for great service. They truly believe the customer is always right.</p>
                            <ul className="actions">
                                <li><Link to="/about" className="button next">Learn more</Link></li>
                            </ul>
                        </div>
                    </section>
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Himalayan Experience</h3>
                            </header>
                            <Link to="/experience" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Great Hospitality</h3>
                            </header>
                            <Link to="/experience" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Parties and Events</h3>
                            </header>
                            <Link to="/experience" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Highest Quality Ingredients</h3>
                            </header>
                            <Link to="/experience" className="link primary"></Link>
                        </article>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex