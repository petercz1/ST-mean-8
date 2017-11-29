console.log('loaded frontend app');

var frontend_app = angular.module('patient_app', ['ngRoute']);
frontend_app.config(do_routes);
frontend_app.controller('all_patients', do_all_patients);
frontend_app.controller('single_patient', do_single_patient);

function do_routes($routeProvider) {
  console.log('doing frontend routes stuff');
  $routeProvider
    .when('/', {
      templateUrl: 'partials/patients.html',
      controller: all_patients
    })
    .when('/patient/:_id', {
      templateUrl: 'partials/patient_record.html',
      controller: single_patient
    });
}
