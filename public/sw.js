self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('fitness-app-v1').then((cache) => cache.addAll(['/','/activity','/workouts']))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});


