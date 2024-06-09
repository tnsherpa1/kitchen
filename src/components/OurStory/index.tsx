import { Link } from "gatsby";
import React from "react";

const OurStory = () => {
  return (
    <section id="two">
      <div className="inner">
        <header className="major">
          <h2>The Story</h2>
        </header>
        <p>
          In the late nineties, owners Kam Chhiring moved to California and
          found a home in the heart of Sonoma Valley. In 1997 Kam opened his
          first restaurant which he named Himalayan Sherpa Cuisine in Glen
          Ellen. Food is at the heart of the human experience. Everyone eats,
          and the experience should be an enjoyable one. With this in mind,
          Himalayan Sherpa Kitchen was born. There was no promise of success as
          most of St. Helena’s restaurants fall under French and Italian
          influence. A Nepalese place would be out of the norm but the quaint
          location excited the pair and on May 29, 2012, Himalayan Sherpa
          Kitchen opened its doors to the public, and it has been a fantastic
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
  );
};

export default OurStory;
