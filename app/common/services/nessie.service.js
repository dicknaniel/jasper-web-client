(function() {
    'use strict';
    app.factory('nessieService', ['$http', '$q', function($http, $q) {
        var restHost = 'http://10.203.79.10:8080/monitoring-web/dashboards/';
        
        var genericSplunkCall = function(endpoint, dateRange) {
            // TODO:: Add default dateRange if null
            var returnData = $q.defer();
            $http({
                    method: "GET",
                    url: restHost + endpoint,
                    params: {
                        fromDate: dateRange.from,
                        toDate: dateRange.to
                    }
                })
                .success(function(data) {
                    returnData.resolve(data);
                })
                .error(function(data) {
                    returnData.reject();
                });

            return returnData.promise;
        };

        return {

            getAccountCreditClientsData: function(dateRange = null) {
                return genericSplunkCall('splunk/rewards/cash/accountcredit', dateRange);
            },

            getPurchaseEraserClientsData: function(dateRange = null) {
                return genericSplunkCall('splunk/rewards/travel/purchaseeraser', dateRange);
            }

        };
    }]);
})();
