
    app.component('swDisplayBoardComponent', {
        templateUrl: 'Components/StarWarsDisplayBoard/StarWarsDisplayBoard.html',
        controller: StarWarsDisplayBoardController,
        controllerAs: 'starWarsDisplayBoardCtrl',
        bindings: {}
    });


function StarWarsDisplayBoardController() {
    var starWarsDisplayBoardCtrl = this;

    starWarsDisplayBoardCtrl.$onInit = function () {

    };
}
