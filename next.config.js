/** @type {import('next').NextConfig} */
require('dotenv').config();

const withNextIntl = require('next-intl/plugin')(
   './src/i18n.tsx'
 );

const nextConfig = {}

module.exports = withNextIntl(nextConfig);
