'use strict';

/* Services */

angular.module('openWeatherApp.services', ['ngResource'])

 
  .value('version', '0.1.6')


  .value('exampleLocations',['Lima','Huancayo','chaclacayo','Buenos Aires','Brazilia','Caracas'])
  .value('stormLocations',['Lima','Huancayo','chaclacayo','Buenos Aires','Brazilia','Caracas'])
 .factory('openWeatherMap', function($resource) {

    var apiKey = '943d3a75c72ea297aa73f129275d2140';
    var apiBaseUrl = 'http://api.openweathermap.org/data/2.5/';

    return $resource(apiBaseUrl + ':path/:subPath?q=:location&lang=es',
      {
        APPID: apiKey,
        mode: 'json',
        callback: 'JSON_CALLBACK',
        units: 'metric',
        lang: 'en'
      },
      {
        queryWeather: {
          method: 'JSONP',
          params: {
            path: 'weather'
          },
          isArray: false,
          headers: {
            'x-api-key': apiKey
          }
        },
        queryForecast: {
          method: 'JSONP',
          params: {
            path: 'forecast'
          },
          isArray: false,
          headers: {
            'x-api-key': apiKey
          }
        },
        queryForecastDaily: {
          method: 'JSONP',
          params: {
            path: 'forecast',
            subPath: 'daily',
            cnt: 7
          },
          isArray: false,
          headers: {
            'x-api-key': apiKey
          }
        }
      }
    )
  })


  .factory('Ciudades',function($http){
   var ciudades={};
     ciudades.getAll=function(){
            
            return $http.get("http://api.openweathermap.org/data/2.5/box/city?bbox=-81,-16,-72,-5,10&cluster=yes&appid=943d3a75c72ea297aa73f129275d2140")              
          }
      return ciudades;
  });
