(function() {
    'use strict';
    app.directive('featuredWeather', function() {
        return {
            restrict: 'E',
            templateUrl: 'common/views/featuredWeather.html'
        };
    })
    .directive('featuredCapitalOne', function() {
        return {
            restrict: 'E',
            template: '<div>you have no money</div>'
        };
    });
})();
