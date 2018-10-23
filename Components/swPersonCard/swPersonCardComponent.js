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
        swPersonCardCtrl.id = parseInt(swPersonCardCtrl.person.url.match(/\d+/));
        //console.log(swPersonCardCtrl.person);

    };


}