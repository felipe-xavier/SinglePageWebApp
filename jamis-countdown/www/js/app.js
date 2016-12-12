// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('conFusion', ['ionic', 'conFusion.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/sidebar.html',
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'mainContent': {
        templateUrl: 'templates/home.html'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
})
.directive("iCountdown",function(){return{restrict:"EAC",scope:{setDate:"@",expireMessage:"@",formatView:"@"},replace:!0,template:"<div><div></div></div>",link:function(e,t){e.insertDate=function(){e.setMessageExpired(e.expireMessage),e.setDateFinal(e.setDate),e.start()},e.$watch("setDate",function(){e.insertDate()},!0);var n=new Date,a=1e3,i=60*a,r=60*i,o=24*r,s={second:a,minute:i,hour:r,day:o,interval:null,messageFinal:"expired!",format:"Y-m-d H:i:s",dateEnd:null};e.setMessageExpired=function(e){s.messageFinal=e},e.setId=function(t){s.id=t,e.viewElement.setAttribute("id",t)},e.setDateFinal=function(e){s.dateEnd=e};var d=function(e){var t=/(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/,n=t.exec(e);return new Date(+n[1],+n[2]-1,+n[3],+n[4],+n[5],+n[6])};e.remaining=function(){var a=new Date;n=d(s.dateEnd);var i=n-a;if(0>i)return clearInterval(s.interval),void(t[0].innerHTML=s.messageFinal);var r=Math.floor(i/s.day),o=Math.floor(i%s.day/s.hour),l=Math.floor(i%s.hour/s.minute),u=Math.floor(i%s.minute/s.second),c=[];c[0]=(10>r?"0":"")+r,c[1]=(10>o?"0":"")+o,c[2]=(10>l?"0":"")+l,c[3]=(10>u?"0":"")+u,t[0].innerHTML=e.setFormatViewTime(c)},e.setFormatViewTime=function(t){return e.formatView.replace(/%d/gi,t[0]).replace(/%h/gi,t[1]).replace(/%i/gi,t[2]).replace(/%s/gi,t[3])},e.setFormatDate=function(e){s.format=e},e.start=function(){return n instanceof Date&&!isNaN(n.valueOf())?void(s.interval=setInterval(this.remaining,s.second)):(console.log("A data final não foi definida, adicione uma data conforme o exemplo: yyyy-mm-dd hh:mm:ss!"),!1)}}}});
