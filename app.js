var app = angular.module('app', ['ui.router','ngAnimate', 'ngSanitize', 'ngToast']);


app.run(function($transitions) {
    $transitions.onStart({ }, function(trans) {
        var ToastService = trans.injector().get('toastService');
        ToastService.startToast();
        trans.promise.finally(ToastService.endToast());
    });
});


app.config(function ($httpProvider, $stateProvider, $urlServiceProvider ,ngToastProvider) {

    $httpProvider.interceptors.push('errorInterceptor');

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
            params: {
                pageNum: null
            },
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
            component: 'swPersonExpandedComponent',
            params: {
                personObj: null
            },
            resolve: {
                personObj: function (starWarsApiService, $stateParams, $q) {
                    if ($stateParams.personObj) {
                        return $q.resolve($stateParams.personObj);
                    } else {
                        return starWarsApiService.getStarWarsIndividualPerson($stateParams.id)
                    }
                }
            }
        })

        // .state('sw.starships', {
        //     url: '/starships/{pageNum:int}',
        //     component: 'swShipsComponent',
        //     resolve: {
        //         swShipsList: function (starWarsApiService, $stateParams, $q) {
        //             if ($stateParams.pageNum) {
        //                 return starWarsApiService.getStarWarsShips($stateParams.pageNum)
        //             } else {
        //                 return starWarsApiService.getStarWarsShips(1)
        //             }
        //         }
        //     }
        // })
        // .state('sw.starship', {
        //     url: '/starships/{id:int}',
        //     component: 'swPersonExpandedComponent',
        //     resolve: {
        //         personObj: function (starWarsApiService, $stateParams, $q) {
        //             if ($stateParams.personObj) {
        //                 return $q.resolve($stateParams.personObj);
        //             } else {
        //                 return starWarsApiService.getStarWarsIndividualPerson($stateParams.id)
        //             }
        //         }
        //     }
        // })
});
