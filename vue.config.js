module.exports = {
  pwa: {
      name: 'pwatest',
      themeColor: '#eaeaea',
      msTileColor: '#ffffff',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
  
      // configure the workbox plugin
      workboxPluginMode: 'GenerateSW',
      manifestOptions: {
          description: 'Aplikasi PWA',
          background_color: '#ffffff',
          display: 'standalone',
          start_url: '/index.html',
          scope: "/",
          orientation: 'landscape',
      }
  }
}