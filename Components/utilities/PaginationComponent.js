app.component('paginationComponent', {
    templateUrl: 'Components/utilities/Pagination.html',
    controller: paginationController,
    controllerAs: 'paginationCtrl',
    bindings: {
        previous: '<',
        next: '<',
        count: '<'
    }
});

function paginationController($state) {
    var paginationCtrl = this;

    paginationCtrl.$onInit = function () {

        paginationCtrl.generateArbitraryPagination(paginationCtrl.count);


        paginationCtrl.prevPageParam = paginationCtrl.slicePageNum(paginationCtrl.previous);
        paginationCtrl.nextPageParam = paginationCtrl.slicePageNum(paginationCtrl.next);
    };

    paginationCtrl.slicePageNum = function (apiLink) {
        //With the way that I have the uirouter setup, we only need the pagenum at the end of the next and previous api link
        if (apiLink) {
            return parseInt(apiLink.match(/\d+/));
        } else {
            return null;
        }
    };

    paginationCtrl.generateArbitraryPagination = function (count) {
        paginationCtrl.numberOfPages = Math.ceil(count / 10); //round up number of pages
        paginationCtrl.arbitraryPageArray = []; //create array for page list
        for (var i = 0; i < paginationCtrl.numberOfPages; i++) {
            paginationCtrl.arbitraryPageArray.push({
                pagenumber: i + 1
            })
        }
    };


    paginationCtrl.isStateActive = function (pageNum) {
        //console.log($state.includes(paginationCtrl.pageState(pageNum)));

        return $state.is(paginationCtrl.pageState(pageNum));
    };

    paginationCtrl.pageState = function (pageNum) {
        //console.log($state.href($state.$current.name,{pageNum:pageNum}));
        return $state.href($state.$current.name, {pageNum: pageNum});
    };


}

