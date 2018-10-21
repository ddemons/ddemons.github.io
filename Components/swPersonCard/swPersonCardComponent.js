app.component('swPersonCardComponent', {
    templateUrl: 'Components/swPersonCard/swPersonCard.html',
    controller: swPersonCardController,
    controllerAs: 'swPersonCardCtrl',
    bindings: {
        person: '<'
    }
});

function swPersonCardController(starWarsApiService) {
    var swPersonCardCtrl = this;

    swPersonCardCtrl.$onInit = function () {
        console.log(swPersonCardCtrl.person);

    };


    // starWarsPersonCtrl.executeNestedApi = function () {
    //     starWarsPersonCtrl.person.films.forEach()
    //     starWarsApiService.getThing()
    //     }
    //
    // };

}