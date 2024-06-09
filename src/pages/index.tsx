// import BaseLayout from "@/layouts/BaseLayout";
import Banner from "@/modules/Banner";
import BaseLayout from "../layouts/BaseLayout";
import React from "react";
import { Link } from "gatsby";
import FeatureImageList from "@/components/FeatureImageList";
import OurStory from "@/components/OurStory";

const feaatureImageListData = [
  {
    title: "Himalayan Experience",
    href: "/experience",
    imageUrl: "/images/feature-image-1.jpg",
  },
  {
    title: "Great Hospitality",
    href: "/experience",
    imageUrl: "/images/feature-image-2.jpg",
  },
  {
    title: "Parties and Events",
    href: "/experience",
    imageUrl: "/images/feature-image-3.jpg",
  },
  {
    title: "Highest Quality Ingredients",
    href: "/experience",
    imageUrl: "/images/feature-image-4.jpg",
  },
];

const Home = () => {
  return (
    <BaseLayout>
      <Banner />

      <div id="main">
        <OurStory />
        <section id="one" className="tiles">
          {feaatureImageListData.map((x, i) => {
            return (
              <FeatureImageList
                title={x.title}
                imageURL={x.imageUrl}
                href={x.href}
                key={i}
              />
            );
          })}
        </section>
      </div>
      <div>Welcome world</div>
    </BaseLayout>
  );
};
export default Home;
