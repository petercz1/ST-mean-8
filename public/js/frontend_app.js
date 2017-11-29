console.log('loaded frontend app');

var frontend_app = angular.module('patient_app', ['ngRoute']);

frontend_app.config(do_routes);

function do_routes($routeProvider) {
  console.log('doing frontend routes stuff');
  $routeProvider
    .when('/', {
      templateUrl: 'partials/patients.html',
      controller: do_all_patients
    })
    .when('/patient/:_id', {
      templateUrl: 'partials/patient_record.html',
      controller: do_single_patient
    });
}