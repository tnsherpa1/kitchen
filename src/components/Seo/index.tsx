import React from "react";
import { Helmet } from "react-helmet";

type Props = {
  seo_title: string;
  meta_description: string;
  meta_keywords: string;
};

const Seo = ({ seo_title, meta_description, meta_keywords }: Props) => {
  if (!seo_title || !meta_description || !meta_keywords) {
    return <span />;
  }

  return (
    <Helmet>
      {seo_title && <title>{seo_title}</title>}
      {meta_description && (
        <meta name="description" content={meta_description} />
      )}
      {meta_keywords && <meta name="keyword" content={meta_keywords} />}
    </Helmet>
  );
};

export default Seo;
