const { paths } = require('react-app-rewired')
const rewireAliases = require('react-app-rewire-aliases')
const path = require('path')

module.exports = function override(config, env) {
  config = rewireAliases.aliasesOptions({
    '@app': path.resolve(__dirname, `${paths.appSrc}/app/`),
    '@components': path.resolve(__dirname, `${paths.appSrc}/components/`),
    '@views': path.resolve(__dirname, `${paths.appSrc}/views/`),
    '@style': path.resolve(__dirname, `${paths.appSrc}/style/`),
    '@context': path.resolve(__dirname, `${paths.appSrc}/context/`),
    '@constants': path.resolve(__dirname, `${paths.appSrc}/constants/`),
    '@assets': path.resolve(__dirname, `${paths.appSrc}/assets/`),
    react: path.resolve(__dirname, `./node_modules/react`),
    'styled-components': path.resolve(
      __dirname,
      `./node_modules/styled-components`,
    ),
  })(config, env)
  return config
}
