importScripts("/react-webpack/precache-manifest.18afb3fdd8ddd5a4821e99fbc698b57e.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

/* globals workbox */
workbox.core.skipWaiting();

workbox.routing.registerRoute(
  /.*fonts\.(?:googleapis|gstatic)\.com.*$/u,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'google-fonts',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 5,
        maxAgeSeconds: 60 * 60 * 24 * 30
      })
    ]
  })
);

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

