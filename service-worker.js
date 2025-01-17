const CACHE_NAME = "pwa-cache-v1";
const urlsToCache = [
  "./",               // Gốc trang
  "./index.html",
  "./style.css",
  "./app.js",
  "./icon192.png",
  "./icon512.png",
  "./manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
