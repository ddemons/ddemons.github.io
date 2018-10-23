app.factory('errorInterceptor', function( toastService, $q){
    return {
        'responseError': function(rejection) {
            switch (rejection.status) {
                case 404:
                    toastService.errorToast("Something went wrongx. Please refresh or try again later.");
                    break;
                case 503:
                    toastService.errorToast("Something went wrong. Please refresh or try again later.");
                    break;
                default:
                    toastService.errorToast("Something went wrong. Please refresh or try again later.");
            }
            return $q.reject(rejection);
        }
    };
});
