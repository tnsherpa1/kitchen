import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'


const Experience = (props) => (
    <Layout>
        <Helmet>
            <title>St. Helena Sherpa Kitchen Experience</title>
            <meta name="description" content="St. Helena Sherpa Kitchen Experience" />
        </Helmet>

        <div id="main" className="alt">

            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Kitchen + Experience</h1>
                    </header>
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <h2>Great Hospitality</h2>
                            <p>At St. Helena Sherpa Kitchen, we're committed to provide the best possible experience to our customers.</p>
                        </div>
                        <div className="col-6">
                            <h2>Highest Quality Ingredients</h2>
                            <p>We only source the best quality ingredients. Our ingredients are vastly sourced from local produce in the area.</p>
                        </div>
                        <div className="col-6">
                            <h2>Parties and Events</h2>
                            <p>We are delighted to bring the Himalayan Sherpa Kitchen experience to any of your private parties and events.</p>
                        </div>
                        <div className="col-6">
                            <h2>Everest Base Camp Trek </h2>
                            <p>Learn more about this amazing seasonal trek to Everest base camp organized by the owner, Chiring Sherpa</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    </Layout>
)

export default Experience