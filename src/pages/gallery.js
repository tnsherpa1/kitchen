import React from 'react'
import Helmet from 'react-helmet'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'
import Layout from '../components/layout'

import img1 from '../assets/images/himalayas-st-helena.jpg'
import img2 from '../assets/images/indian-cuisine-st-helena.jpg'
import img3 from '../assets/images/indian-restaurant-st-helena.jpg'
import img4 from '../assets/images/sherpa-kitchen-st-helena.jpg'

const photos = [
  {
    src: 'https://s3-media1.fl.yelpcdn.com/bphoto/3KyvtBP1_rmd1_BOMT_vSQ/o.jpg',
    width: 4,
    height: 3,
  },
  {
    src: img2,
    width: 4,
    height: 3,
  },
  {
    src: img3,
    width: 4,
    height: 3,
  },
  {
    src: img4,
    width: 4,
    height: 3,
  },
  {
    src: 'https://s3-media1.fl.yelpcdn.com/bphoto/TDZ2ZoVt7_NvJ_f5SDlBxw/o.jpg',
    width: 1,
    height: 1,
  },
  {
    src: 'https://s3-media3.fl.yelpcdn.com/bphoto/mNFm-YakbeAmYMKJILhJcQ/o.jpg',
    width: 3,
    height: 4,
  },
  {
    src: 'https://s3-media1.fl.yelpcdn.com/bphoto/FTMcVRuKFxMzNvcX5RiJhQ/o.jpg',
    width: 4,
    height: 3,
  },
  {
    src: 'https://s3-media1.fl.yelpcdn.com/bphoto/-jRR2FLrBdWoGyKUE7nf3Q/o.jpg',
    width: 4,
    height: 4,
  },
  {
    src: img1,
    width: 4,
    height: 3,
  },
  {
    src: 'https://s3-media1.fl.yelpcdn.com/bphoto/S638kgrBbOzMG3N33pEL-g/o.jpg',
    width: 4,
    height: 3,
  },
  {
    src: 'https://s3-media1.fl.yelpcdn.com/bphoto/TNxLdQJ33_7E7m2h50UjLA/o.jpg',
    width: 3,
    height: 4,
  },
  {
    src: 'https://s3-media4.fl.yelpcdn.com/bphoto/88kXqhkAnUPlNonj_IC-CA/o.jpg',
    width: 4,
    height: 3,
  },
]

class Photo extends React.Component {
  constructor() {
    super()
    this.state = { currentImage: 0 }
    this.closeLightbox = this.closeLightbox.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    })
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }
  render() {
    return (
      <Layout>
        <Helmet>
          <title>Photo - Forty by HTML5 UP</title>
          <meta name="description" content="Photo Page" />
        </Helmet>

        <div id="main" className="alt">
          <section id="one">
            <div className="inner">
                <Gallery photos={photos} onClick={this.openLightbox} />
                <Lightbox images={photos}
                onClose={this.closeLightbox}
                onClickPrev={this.gotoPrevious}
                onClickNext={this.gotoNext}
                currentImage={this.state.currentImage}
                isOpen={this.state.lightboxIsOpen}
                />
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Photo
