self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('nutriwise-cache-v1')
      .then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/src/app.webmanifest',
          '/src/favicon.png',
          '/src/css/detail-style.css',
          '/src/css/menu.css',
          '/src/css/profil.css',
          '/src/css/style.css',
          '/src/img/icon-16.png',
          '/src/img/icon-64.png',
          '/src/img/icon-128.png',
          '/src/img/icon-256.png',
          '/src/img/icon-512.png',
          '/src/js/detail.js',
          '/src/js/menu.js',
          '/src/js/profil.js',
          '/src/js/script.js',
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
event.respondWith(
caches.match(event.request)
.then(function(response) {
  return response || fetch(event.request);
    })
  );
});