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

function addToHomeScreen() {
  var a2hsPrompt = document.getElementById('a2hs-prompt');
  // Hiển thị thông báo
  a2hsPrompt.style.display = 'block';
  // Đăng ký sự kiện nhấp vào nút "Thêm"
  document.getElementById('a2hs-button').addEventListener('click', function() {
    // Thêm ứng dụng vào màn hình chính
    addToHomeScreen.prompt.prompt();
    // Ẩn thông báo
    a2hsPrompt.style.display = 'none';
  });
}
