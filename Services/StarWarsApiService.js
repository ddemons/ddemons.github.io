app.factory('starWarsApiService', function($http){


    var getStarWarsPeople = function(id) {
        return $http.get('https://swapi.co/api/people').then(function(response){
            return response.data;
        });
    };


    return {
        getStarWarsPeople: getStarWarsPeople

    };
});