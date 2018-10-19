var app = angular.module("app", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: false,
        requireBase: false
    }).hashPrefix('');
    $urlRouterProvider.otherwise('/board');
    $stateProvider
        .state('board', {
            url: '/',
            component: 'starWarsDisplayBoardComponent',
            resolve: {
                people: function(StarWarsApiService){
                    return 1;
                }
            }
        })
//
});
