app.factory('starWarsApiService', function ($http, toastService) {


    var getStarWarsPeople = function (pageNum) {
        return $http.get('https://swapi.co/api/people/?page=' + pageNum, {cache: true}).then(function (response) {
            return response.data;
        }).catch(function (response){
            toastService.errorToast("Something went wrong. Please refresh or try again later.");
        });
    };

    var getStarWarsShips = function (pageNum) {
        return $http.get('https://swapi.co/api/starships/?page=' + pageNum, {cache: true}).then(function (response) {
            return response.data;
        }).catch(function (response){
            toastService.errorToast("Something went wrong. Please refresh or try again later.");
        });
    };

    var getStarWarsIndividualPerson = function (id) {
        return $http.get('https://swapi.co/api/people/' + id + '/', {cache: true}).then(function (response) {
            return response.data;
        }).catch(function (response){
            toastService.errorToast("Something went wrong. Please refresh or try again later.");
        });
    };

    var getStarWarsIndividualPlanet = function (id) {
        return $http.get('https://swapi.co/api/planets/' + id + '/', {cache: true}).then(function (response) {
            return response.data;
        }).catch(function (response){
            toastService.errorToast("Something went wrong. Please refresh or try again later.");
        });
    };

    var getStarWarsIndividualStarShip = function (id) {
        return $http.get('https://swapi.co/api/starships/' + id + '/', {cache: true}).then(function (response) {
            return response.data;
        }).catch(function (response){
            toastService.errorToast("Something went wrong. Please refresh or try again later.");
        });
    };

    var getStarWarsIndividualFilm = function (id) {
        return $http.get('https://swapi.co/api/films/' + id + '/', {cache: true}).then(function (response) {
            return response.data;
        }).catch(function (response){
            toastService.errorToast("Something went wrong. Please refresh or try again later.");
        });
    };


    return {
        getStarWarsPeople: getStarWarsPeople,
        getStarWarsShips: getStarWarsShips,
        getStarWarsIndividualPerson: getStarWarsIndividualPerson,
        getStarWarsIndividualPlanet: getStarWarsIndividualPlanet,
        getStarWarsIndividualStarShip: getStarWarsIndividualStarShip,
        getStarWarsIndividualFilm: getStarWarsIndividualFilm
    };
});