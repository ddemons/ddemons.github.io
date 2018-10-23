app.component('swPeopleComponent', {
    templateUrl: 'Components/swPeople/swPeople.html',
    controller: swPeopleController,
    controllerAs: 'swPeopleCtrl',
    bindings: {
        swPeopleList: '<'
    }
});


function swPeopleController(starWarsApiService) {
    var swPeopleCtrl = this;

    swPeopleCtrl.$onInit = function () {
        swPeopleCtrl.generateArbitraryPagination(swPeopleCtrl.swPeopleList.count);

        swPeopleCtrl.results = swPeopleCtrl.swPeopleList.results;

        swPeopleCtrl.prevPageParam = swPeopleCtrl.slicePageNum(swPeopleCtrl.swPeopleList.previous);
        swPeopleCtrl.nextPageParam = swPeopleCtrl.slicePageNum(swPeopleCtrl.swPeopleList.next);

    };

    swPeopleCtrl.slicePageNum = function (apiLink) {
        //With the way that I have the uirouter setup, we only need the pagenum at the end of the next and previous api link
        if (apiLink) {
            return parseInt(apiLink.match(/\d+/));
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
