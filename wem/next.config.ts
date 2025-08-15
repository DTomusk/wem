import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  i18n: {
    locales: ['en', 'de'], // list of supported languages
    defaultLocale: 'en',
  },
};

export default nextConfig;
