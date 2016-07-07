(function() {
    'use strict';
    app.directive('jasperHeader', ['$location', function($location) {
        return {
            restrict: 'E',
            templateUrl: 'common/views/jasperHeader.html'
        };
    }]);
})();
