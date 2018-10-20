// angular.module('app').component('starWarsDisplayBoardComponent', {
//     templateUrl: 'Components/StarWarsDisplayBoard/StarWarsDisplayBoard.html',
//     controller: StarWarsDisplayBoardController,
//     controllerAs: 'starWarsDisplayBoardCtrl',
//     bindings: {}
// });



//angular.module('app')
    app.component('swDisplayBoardComponent', {
        templateUrl: 'Components/StarWarsDisplayBoard/StarWarsDisplayBoard.html',
        controller: StarWarsDisplayBoardController,
        controllerAs: 'starWarsDisplayBoardCtrl',
        bindings: {}
    });


function StarWarsDisplayBoardController(starWarsApiService) {
    var starWarsDisplayBoardCtrl = this;

    starWarsDisplayBoardCtrl.$onInit = function () {
        console.log("hello world1");
        //starWarsDisplayBoardCtrl.data = '';

        // starWarsApiService.getStarWarsPeople().then(function (response) {
        //     console.log(response);
        //
        //     starWarsDisplayBoardCtrl.results = response.results;
        //     starWarsDisplayBoardCtrl.prev = response.previous;
        //     starWarsDisplayBoardCtrl.next = response.next;
        // });
        //use modulus for pagination
        //needed: caching, screen reader and etc
    };
}
