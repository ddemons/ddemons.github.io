app.component('swPersonExpandedComponent', {
    templateUrl: 'Components/swPersonExpanded/swPersonExpanded.html',
    controller: swPersonExpandedController,
    controllerAs: 'swPersonExpandedCtrl',
    bindings: {
        personObj: '<'
    }
});

function swPersonExpandedController(starWarsApiService) {
    var swPersonExpandedCtrl = this;

    swPersonExpandedCtrl.$onInit = function () {
        swPersonExpandedCtrl.films =[];
        swPersonExpandedCtrl.planets =[];
        swPersonExpandedCtrl.starships =[];

        swPersonExpandedCtrl.fetchApiArrays();
    };


    swPersonExpandedCtrl.fetchApiArrays = function () {
        var id = '';
        swPersonExpandedCtrl.personObj.films.forEach(function (element) {
            id = parseInt(element.match(/\d+/));
            starWarsApiService.getStarWarsIndividualFilm(id).then(function (response) {
                swPersonExpandedCtrl.films.push(response);
            })
        });

        swPersonExpandedCtrl.personObj.starships.forEach(function (element) {
            id = parseInt(element.match(/\d+/));
            starWarsApiService.getStarWarsIndividualStarShip(id).then(function (response) {
                swPersonExpandedCtrl.starships.push(response);
            })
        });

    }
}