self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('countdown').then(function(cache) {
     return cache.addAll([
       '/SinglePageWebApp/jamis-countdown/www/',
       '/SinglePageWebApp/jamis-countdown/www/index.html',
       '/SinglePageWebApp/jamis-countdown/www/templates/home.html',
       '/SinglePageWebApp/jamis-countdown/www/templates/login.html',
       '/SinglePageWebApp/jamis-countdown/www/templates/sidebar.html',
       '/SinglePageWebApp/jamis-countdown/www/css/style.css',

       'https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300',
       '/SinglePageWebApp/jamis-countdown/wwwlib/ionic/css/ionic.css',
       '/SinglePageWebApp/jamis-countdown/wwwlib/ionic/js/ionic.bundle.js',
       //'cordova.js',
       '/SinglePageWebApp/jamis-countdown/www/css/style.css',

       '/SinglePageWebApp/jamis-countdown/www/js/app.js',
       '/SinglePageWebApp/jamis-countdown/www/js/directives.js',
       '/SinglePageWebApp/jamis-countdown/www/js/controllers.js'
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