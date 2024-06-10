// import BaseLayout from "@/layouts/BaseLayout";
import Banner from "@/modules/Banner";
import BaseLayout from "../layouts/BaseLayout";
import React from "react";
import { Link } from "gatsby";
import FeatureImageList from "@/components/FeatureImageList";
import OurStory from "@/components/OurStory";
import { defaultPalette } from "@/theme/color";

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
    className: "large",
  },
  {
    title: "Parties and Events",
    href: "/experience",
    imageUrl: "/images/feature-image-3.jpg",
    className: "large",
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
        <section id="one" className="feature-image-wrapper">
          {feaatureImageListData.map((x, i) => {
            const colorPalette =
              `accent${i + 1}` as keyof typeof defaultPalette;
            return (
              <FeatureImageList
                title={x.title}
                imageURL={x.imageUrl}
                href={x.href}
                key={i}
                bgColor={colorPalette}
                className={x.className}
              />
            );
          })}
        </section>
      </div>
    </BaseLayout>
  );
};
export default Home;
