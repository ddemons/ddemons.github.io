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
        swPeopleList: '<'
    }
});


function SWPeopleController(starWarsApiService) {
    var swPeopleCtrl = this;

    swPeopleCtrl.$onInit = function () {
        //console.log("hello world1");

        swPeopleCtrl.generateArbitraryPagination(swPeopleCtrl.swPeopleList.count);


        swPeopleCtrl.results = swPeopleCtrl.swPeopleList.results;


        swPeopleCtrl.prevPageParam = swPeopleCtrl.slicePageNum(swPeopleCtrl.swPeopleList.previous);
        swPeopleCtrl.nextPageParam = swPeopleCtrl.slicePageNum(swPeopleCtrl.swPeopleList.next);
        //});
        //use modulus for pagination
        //needed: caching, screen reader and etc


    };

    swPeopleCtrl.slicePageNum = function (apiLink) {
        //With the way that I have the uirouter setup, we only need the pagenum at the end of the next and previous api link
        if (apiLink) {
            return apiLink.slice(34);
        } else {
            return null;
        }
    };

    swPeopleCtrl.generateArbitraryPagination = function (count) {
        swPeopleCtrl.numberOfPages = Math.ceil(count/10); //round up number of pages
        swPeopleCtrl.arbitraryPageArray = []; //create array for page list
        for(var i = 0; i < swPeopleCtrl.numberOfPages; i++) {
            swPeopleCtrl.arbitraryPageArray.push ({
                pagenumber : i+1
            })
        }
    }
}
