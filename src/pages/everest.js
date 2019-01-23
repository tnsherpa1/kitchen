import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import everestInfo from '../assets/images/everest-trek-info.jpeg'

const Everest = (props) => (
    <Layout>
        <Helmet>
            <title>Everest Base Camp Trek</title>
            <meta name="description" content="Everest Trek" />
        </Helmet>

        <div id="main" className="alt">

            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Everest Base Camp Trek</h1>
                    </header>
                    <div className="grid-wrapper">
                    <div className="col-8">
                        <img id="everestInfo" src={everestInfo} alt="Everest Base Camp Trek Information" />
                    </div>
                    <div className="col-4">
                        <p>Mt. Everest Base Camp trek organized by the owner every season, Chiring Sherpa. Chiring leads a trip to Nepal every year. Tourists enjoy and fully immerse in the local culture and natural beauty along the route.</p>
                    </div>
                    </div>
                </div>
            </section>

        </div>

    </Layout>
)

export default Everest