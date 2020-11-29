import webpack from 'webpack'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'pokemon',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#78CE5B',
    throttle: 0,
    height: '3px',
    continuous: true
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
      { src: '~/plugins/vue-scrollto', ssr: false },
      { src: '~/plugins/vue-moment' },
      { src: '~/plugins/vue-click-outside' },
      // { src: '~/plugins/vue-cookie' },
      { src: '~/plugins/vee-validate' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: false,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
      loaders: {
        cssModules: {
          modules: {
            localIdentName: "__[local]pkm[hash:base64:8]",
          }
        }
      }
  }
}
