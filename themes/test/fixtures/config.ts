import { SiteConfig } from "../../advanced/src/config";

const config: SiteConfig = {
  // Website configuration
  website: {
    title: "Panorama Rent a Car", // Homepage title
    titleShort: "Panorama Rent a Car", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation
    name: "Panorama Rent a Car", // Website name used for homescreen (PWA) and SEO
    description: "A GatsbyJS starter equipped with advanced features.", // Website description used for RSS feeds/meta description tag
    language: "en",
    logoUrl: "/logos/logo-1024.png", // Logo used for SEO
    fbAppId: "1111111111111111", // FB Application ID for using app insights
    twitterName: "Vagr9K", // Twitter handle of the website
    url: "https://www.panoramacars.ae", // Domain of your website without the pathPrefix
    rss: "/rss.xml", // Path to the RSS file
    rssTitle: "Gatsby Advanced Starter RSS Feed", // Title of the RSS feed

    googleAnalyticsId: "G-F8CW7WPWKJ", // GA tracking ID
    copyright: "© Copyright 2023 | Panorama Rent A Car L.L.C", // Copyright string for the footer of the website and RSS feed.

    themeColor: "#D83850", // Used for setting manifest and progress theme colors.
    backgroundColor: "#F7F7F7", // Used for setting manifest background color.
  },

  // User configuration
  user: {
    id: "AdvancedUser", // Unique identifier of the user on the website. User for OpenGraph SEO tags
    firstName: "First", // Used for SEO
    lastName: "Last", // Used for SEO
    twitterName: "", // Twitter username used for SEO
    linkedIn: "your-linkedin", // Used for contact information
    github: "vagr9k", // Used for contact information
    email: "info@panoramacars.ae", // Used for contact information and in the RSS feed
    location: "United Arab Emirates", // User location used for SEO
    about: "", // User information used for the author section
    avatar: "", // User avatar used for the author section
  },

  // Organization information used for SEO
  organization: {
    name: "Panorama Rent a Car",
    description: "Panorama Rent a Car, Abu Dhabi-United Arab Emirates",
    logoUrl: "/logos/logo-512.png",
    url: "https://www.panoramacars.ae", // URL of the organization website
  },

  // Gatsby Configuration
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  iconList: [], // List of icon names to be used in the manifest.

  contentDir: "./content", // Directory for MDX posts
  assetDir: "./static", // Asset directory

  embeddedImageWidth: 768, // MDX embedded image width. Used by gatsby-plugin-image for optimization
  embeddedVideoWidth: 920, // MDX embedded video width in pixels

  basePath: "",
};

export default config;
