import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Contact from '../components/Contact'

const Everest = (props) => (
    <Layout>
        <Helmet>
            <title>Contact Us</title>
            <meta name="description" content="Contact us" />
        </Helmet>

        <div id="main" className="alt">

            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Contact</h1>
                    </header>
                    <div className="box">
                        <Contact />
                    </div>
                </div>
            </section>

        </div>

    </Layout>
)

export default Everest