console.log('loaded frontend app');

var frontend_app = angular.module('patient_app', ['ngRoute']);

frontend_app.config(do_routes);

function do_routes($routeProvider) {
  console.log('doing frontend routes stuff');
  $routeProvider
    .when('/',{

    })
    .when('/patient/:_id', {
        
    });
}