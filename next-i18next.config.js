//next-i18next.config.js, in the root directory.
const nextI18NextConfig = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ar"],
  },
  reloadOnPrerender: process.env.NODE_ENV === "development",
};

export default nextI18NextConfig;
