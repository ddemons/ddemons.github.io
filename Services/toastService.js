app.factory('toastService', function (ngToast) {

    var startToast = function () {
        ngToast.create({
            className: 'warning',
            content: '<a href="#" class="">Loading your page...</a>',
            dismissOnTimeout: true,
            dismissButton: true,
            timeout: 9000
        });
    };

    var endToast = function () {
        ngToast.dismiss();
        ngToast.create({
            className: 'success',
            content: '<a href="#" class="">Success!</a>',
            dismissOnTimeout: true,
            dismissButton: true,
            timeout: 2000
        });
    };

    var errorToast = function (message) {
        ngToast.dismiss();
        ngToast.create({
            className: 'error',
            content: '<a href="#" class="">'+message+'</a>',
            dismissOnTimeout: true,
            dismissButton: true,
            timeout: 9000
        });
    };

    return {
        startToast: startToast,
        endToast: endToast,
        errorToast: errorToast
    };
});