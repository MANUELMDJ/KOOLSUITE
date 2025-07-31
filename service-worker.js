self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('kooltools-cache').then(function(cache) {
      return cache.addAll([
        'index.html',
        'style.css',
        'manifest.json',
        'icon.png',
        'logo.jpg',
        'apps/subwoofer.html'
      ]);
    })
  );
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
