app.factory('starWarsApiService', function($http){


    var getStarWarsPeople = function(pageNum) {
        return $http.get('https://swapi.co/api/people/?page=' + pageNum ,{cache: true}).then(function(response){
            return response.data;
        });
    };


    return {
        getStarWarsPeople: getStarWarsPeople

    };
});