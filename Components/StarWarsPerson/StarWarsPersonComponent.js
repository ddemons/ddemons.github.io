app.component('starWarsPersonComponent', {
    templateUrl: 'Components/StarWarsPerson/StarWarsPerson.html',
    controller: StarWarsPersonController,
    controllerAs: 'starWarsPersonCtrl',
    bindings: {
    }
});

function StarWarsPersonController() {
    var starWarsPersonCtrl = this;

    starWarsPersonCtrl.$onInit = function () {
        console.log("hello world2");

    };
}