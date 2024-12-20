self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('pwa-cache').then((cache) => {
      return cache.addAll([
        './', // Cập nhật tất cả tài nguyên cần cache
        './index.html',
        './style.css',
        './manifest.json',
        './icon-192x192.png', // Thêm các icon và tài nguyên khác
        './icon-512x512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});


