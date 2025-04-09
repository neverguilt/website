/** @type {import('next-sitemap').IConfig} */
// next-sitemap.config.js
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.neverguilt.com",
  generateRobotsTxt: true, // (optional) Generate a robots.txt file
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/admin/*"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot", allow: "/public", disallow: "/private" },
    ],
  },
};
