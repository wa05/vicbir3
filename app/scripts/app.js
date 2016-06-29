'use strict';

/**
 * @ngdoc overview
 * @name vicbir3App
 * @description
 * # vicbir3App
 *
 * Main module of the application.
 */
angular
  .module('vicbir3App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'youtube-embed'
  ]).controller('mainCtrl', ['$scope',function($scope) {
      $scope.lala = 'lala';
  }])

.controller('VideosCtrl', ['$scope',function($scope) {

  $scope.pageClass = 'page-videos';
  $scope.anotherGoodOne = 'https://www.youtube.com/watch?v=iVsY18yuPJA';
  $scope.videos = [
    {
      'link':'https://www.youtube.com/watch?v=zdnRmd1GDVU',
      'thumbnail':'http://img.youtube.com/vi/zdnRmd1GDVU/2.jpg',
      'title':'Venme a Buscar(con Henry Martinez)'
    },{
      'link':'https://www.youtube.com/watch?v=iVsY18yuPJA',
      'thumbnail':'http://img.youtube.com/vi/iVsY18yuPJA/2.jpg',
      'title':' Memoria del viento (con Franco Luciani - Alejandro Szwarcman)'
    },{
      'link':'https://www.youtube.com/watch?v=4K8SHsE-AgA',
      'thumbnail':'http://img.youtube.com/vi/4K8SHsE-AgA/2.jpg',
      'title':'Rio de los pajaros (con Anibal Sampayo)'
    },{
      'link':'https://www.youtube.com/watch?v=D08pPG-HkWI',
      'thumbnail':'http://img.youtube.com/vi/4K8SHsE-AgA/1.jpg',
      'title':'El timido (con Raul Carnota)'
    },{
      'link':'https://www.youtube.com/watch?v=osT5flWQyJA',
      'thumbnail':'http://img.youtube.com/vi/osT5flWQyJA/2.jpg',
      'title':'Lavandera Chaguanca (con Alejandro Carrizo, Nestor Soria, Lucho Hoyos)'
    },{
      'link':'https://www.youtube.com/watch?v=Nba8ZUJng3g',
      'thumbnail':'http://img.youtube.com/vi/Nba8ZUJng3g/2.jpg',
      'title':'Donata Suarez (con Juan Falu - Carlos Herrera) - Juan Falu'
    },
  ];
    
    $scope.videoChange=function(vi){
      $scope.anotherGoodOne=vi;
    };

}]).controller('fotosCtrl', ['$scope',function($scope) {

  $scope.images=[
    {
      'name': 'Cantando',
      'location':'images/1.jpg',
       'id':0
    },
    {'name': 'Tocando','location':'images/2.jpg', 'id':1},
    {'name': 'Ensayo','location':'images/3.jpg', 'id':2},
    {'name': 'Ensayo','location':'images/4.jpg', 'id':3},
    {'name': 'Ensayo','location':'images/5.jpg', 'id':4},
    {'name': 'Recital','location':'images/6.jpg', 'id':5},
    {'name': 'Recital','location':'images/7.jpg', 'id':6},
    {'name': 'Recital','location':'images/7.jpg', 'id':7},
    {'name': 'Recital','location':'images/7.jpg', 'id':8},
    {'name': 'Recital','location':'images/7.jpg', 'id':9},
    {'name': 'Recital','location':'images/7.jpg', 'id':10},
    {'name': 'Recitasl','location':'images/5.jpg', 'id':11},
    {'name': 'Recitalas','location':'images/7.jpg', 'id':12},
    {'name': 'Recitalasas','location':'images/7.jpg', 'id':13}

  ];  

}]);
