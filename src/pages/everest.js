import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import everestInfo from '../assets/images/everest-trek-info.jpeg'

const Everest = (props) => (
    <Layout>
        <Helmet>
            <title>Everest Base Camp Trek</title>
            <meta name="description" content="Everest Page" />
        </Helmet>

        <div id="main" className="alt">

            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Everest Base Camp Trek</h1>
                    </header>
                    <div className="grid-wrapper">
                    <div className="col-12">
                        <img id="everestInfo" src={everestInfo} alt="Everest Base Camp Trek Information" />
                    </div>
                    </div>
                </div>
            </section>

        </div>

    </Layout>
)

export default Everest