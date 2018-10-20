// angular.module('app').component('starWarsDisplayBoardComponent', {
//     templateUrl: 'Components/StarWarsDisplayBoard/StarWarsDisplayBoard.html',
//     controller: StarWarsDisplayBoardController,
//     controllerAs: 'swPeopleCtrl',
//     bindings: {}
// });



//angular.module('app')
    app.component('swPeopleComponent', {
        templateUrl: 'Components/swPeople/swPeople.html',
        controller: SWPeopleController,
        controllerAs: 'swPeopleCtrl',
        bindings: {
            swPeopleList : '<'
        }
    });


function SWPeopleController(starWarsApiService) {
    var swPeopleCtrl = this;

    swPeopleCtrl.$onInit = function () {
        console.log("hello world1");
        //swPeopleCtrl.data = '';

        // starWarsApiService.getStarWarsPeople().then(function (response) {
        //     console.log(response);

            swPeopleCtrl.results = swPeopleCtrl.swPeopleList.results;
            swPeopleCtrl.prev = swPeopleCtrl.swPeopleList.previous;
            swPeopleCtrl.next = swPeopleCtrl.swPeopleList.next;
        //});
        //use modulus for pagination
        //needed: caching, screen reader and etc
    };
}
