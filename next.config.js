module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en', 'pl'],
    defaultLocale: 'en',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  
}