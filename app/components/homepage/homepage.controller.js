(function() {
    'use strict';
    app.controller('homepageCntl', ['$scope', '$firebaseAuth', '$firebaseObject', function($scope, $firebaseAuth, $firebaseArray) {
        var config = {
            apiKey: "AIzaSyCjzaWHNmPZkTJX3--g8Kes36KBpHkx2lI",
            authDomain: "project1-55aa7.firebaseapp.com",
            databaseURL: "https://project1-55aa7.firebaseio.com"
        };

        firebase.initializeApp(config);
        var auth = firebase.auth();

        var provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider).then(function(result) {
            var uid = result.user.uid;
        }).catch(function(error) {
            // An error occurred
        });

        firebase.database().ref('purchases/purchases').on('child_added', function(snapshot) {
            console.log(snapshot.val());
        });

        function init() {
            $scope.featured = 'bank';
            firebase.database().ref('accounts').once('value').then(function(snapshot) {
                $scope.purchases = snapshot.val();
                console.log($scope.purchases);
            });
        }

        init();
    }]);
})();
