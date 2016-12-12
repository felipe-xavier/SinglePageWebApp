self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('countdown').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/templates/home.html',
       '/templates/login.html',
       '/templates/sidebar.html',
       '/css/style.css',

       'https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300',
       'lib/ionic/css/ionic.css',
       'lib/ionic/js/ionic.bundle.js',
       //'cordova.js',
       '/css/style.css',

       '/js/app.js',
       '/js/directives.js',
       '/js/controllers.js'
     ]);
   })
 );
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});