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
            {
              name: 'description',
              content:
                'Best Indian, Nepalese, Tibetan restaurant in St. Helena, CA',
            },
            {
              name: 'keywords',
              content:
                'indian restaurant in st. helena, indian food-st. helena, indian cuisine-st. helena, himalayan kitchen- st. helena, himalayas- st. helena, sherpa kitchen- st. helena, st. helena lunch',
            },
          ]}
        />

        <Banner />

        <div id="main">
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>The Story</h2>
              </header>
              <p>
                In the late nineties, owners Kam Chhiring moved to California and
                found a home in the heart of Sonoma Valley. In 1997 Kam opened his
                first restaurant which he named Himalayan Sherpa Cuisine in Glen
                Ellen.
                Food is at the heart of the human experience. Everyone eats, and the
                experience should be an enjoyable one. With this in mind, Himalayan
                Sherpa Kitchen was born. There was no promise of success as most of
                St. Helena’s restaurants fall under French and Italian influence. A
                Nepalese place would be out of the norm but the quaint location
                excited the pair and on May 29, 2012, Himalayan Sherpa Kitchen
                opened its doors to the public, and it has been a fantastic
                adventure ever since.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/about" className="button next">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </section>
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>Himalayan Experience</h3>
              </header>
              <Link to="/experience" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>Great Hospitality</h3>
              </header>
              <Link to="/experience" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <header className="major">
                <h3>Parties and Events</h3>
              </header>
              <Link to="/experience" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <header className="major">
                <h3>Highest Quality Ingredients</h3>
              </header>
              <Link to="/experience" className="link primary" />
            </article>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
