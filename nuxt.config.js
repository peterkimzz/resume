export default {
  mode: 'spa',
  server: {
    port: 3001
  },
  head: {
    title: '김동현 개발자 이력서 :: peterkimzz',
    meta: [
      { charset: 'utf-8' },
      {
        'http-equiv': 'X-UA-Compatible',
        content: 'IE=edge,chrome=1'
      },
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#22274d', height: '3px' },
  pageTransition: 'fade',
  plugins: [],
  modules: ['@nuxtjs/style-resources'],
  googleAnalytics: {
    id: 'UA-114457301-1'
  },
  styleResources: {
    scss: [
      'node_modules/open-color/open-color.scss',
      './assets/scss/index.scss'
    ]
  },
  build: {
    extend(config, ctx) {}
  },
  generate: {
    dir: 'public'
  }
}
