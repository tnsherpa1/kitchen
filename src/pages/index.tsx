// import BaseLayout from "@/layouts/BaseLayout";
import Banner from "@/modules/Banner";
import BaseLayout from "../layouts/BaseLayout";
import React from "react";
import Helmet from "react-helmet";

import FeatureImageList from "@/components/FeatureImageList";
import OurStory from "@/components/OurStory";
import { defaultPalette } from "@/theme/color";
import featureImage from "@/assets/images/feature-image-1.jpg";
import featureImage2 from "@/assets/images/feature-image-2.jpg";
import featureImage3 from "@/assets/images/feature-image-3.jpg";
import featureImage4 from "@/assets/images/feature-image-4.jpg";

const feaatureImageListData = [
  {
    title: "Himalayan Experience",
    href: "/experience",
    imageUrl: featureImage,
  },
  {
    title: "Great Hospitality",
    href: "/experience",
    imageUrl: featureImage2,
    className: "large",
  },
  {
    title: "Parties and Events",
    href: "/experience",
    imageUrl: featureImage3,
    className: "large",
  },
  {
    title: "Highest Quality Ingredients",
    href: "/experience",
    imageUrl: featureImage4,
  },
];

const Home = () => {
  return (
    <BaseLayout>
      <Helmet
        title="Sherpa Kitchen - St. Helena"
        meta={[
          {
            name: "description",
            content:
              "Best Indian, Nepalese, Tibetan restaurant in St. Helena, CA",
          },
          {
            name: "keywords",
            content:
              "indian restaurant in st. helena, indian food-st. helena, indian cuisine-st. helena, himalayan kitchen- st. helena, himalayas- st. helena, sherpa kitchen- st. helena, st. helena lunch",
          },
        ]}
      />

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
