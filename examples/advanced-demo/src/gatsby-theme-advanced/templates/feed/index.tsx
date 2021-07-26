import React, { useContext } from "react";
import { Helmet } from "react-helmet";

import {
  ConfigContext,
  FeedTemplateProps,
  useInfiniteFeed,
} from "gatsby-theme-advanced";

import Layout from "../../../layouts";
import FeedListing from "../../../components/FeedListing";

import "./styles.css";

const Feed = ({ pageContext }: FeedTemplateProps): JSX.Element => {
  const { feedListing, feedElementRef } = useInfiniteFeed(pageContext);

  const config = useContext(ConfigContext);

  // Override the title for non-index feeds
  const getTitleOverride = () => {
    if (pageContext.feedId) {
      if (pageContext.feedType === "tag")
        return (
          <Helmet
            title={`Posts tagged as "${pageContext.feedId}" | ${config.website.title}`}
          />
        );

      if (pageContext.feedType === "category")
        return (
          <Helmet
            title={`Posts in category "${pageContext.feedId}" | ${config.website.title}`}
          />
        );
    }

    return null;
  };

  return (
    <Layout>
      <main className="feed-wrapper" ref={feedElementRef}>
        {getTitleOverride()}
        <FeedListing listing={feedListing} />
      </main>
    </Layout>
  );
};

export default Feed;
