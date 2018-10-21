var app = angular.module('app', ['ui.router']);

app.config(function ($httpProvider, $stateProvider, $urlServiceProvider) {
    $httpProvider.defaults.paramSerializer = '$httpParamSerializerJQLike';
    $urlServiceProvider.rules.otherwise('/sw/people/1');
    $stateProvider.state('sw', {
        url: '/sw',
        component: 'swDisplayBoardComponent',
        abstract: true
    })
        .state('sw.people', {
            url: '/people/{pageNum:int}',
            component: 'swPeopleComponent',
            resolve: {
                swPeopleList: function (starWarsApiService, $stateParams, $q) {
                    if ($stateParams.pageNum) {
                        return starWarsApiService.getStarWarsPeople($stateParams.pageNum)
                    } else {
                        return starWarsApiService.getStarWarsPeople(1)
                    }
                }
            }
        })
        .state('sw.person', {
            url: '/person/{id:int}',
            component: 'swPersonComponent',
            resolve: {
                swPeopleList: function (starWarsApiService, $stateParams, $q) {
                    if ($stateParams.object) {
                        return starWarsApiService.getStarWarsPeople($stateParams.pageNum)
                    } else {
                        return starWarsApiService.getStarWarsPeople(1)
                    }
                }
            }
        })
});

// .state('index', {
//     abstract: true,
//     component: 'indexComponent',
//     resolve: {
//         currentUser: function (usersService) {
//             return usersService.getUser();
//         }
//     }
// })
//     .state('index.splashPage', {
//         url: '/landing',
//         component: 'splashPageComponent',
//         resolve: {
//             oustandingRequest: function (currentUser, permissionsService) {
//                 if (!currentUser.outstanding_request) {
//                     return permissionsService.targetAvailableState();
//                 } else {
//                     return currentUser.outstanding_request;
//                 }
//             }
//         }
//     })
//
