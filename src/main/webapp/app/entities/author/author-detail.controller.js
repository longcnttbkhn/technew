(function() {
    'use strict';

    angular
        .module('technewApp')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Author', 'User', 'Post'];

    function ProfileController($scope, $rootScope, $stateParams, previousState, entity, Author, User, Post) {
        var vm = this;

        vm.author = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('technewApp:authorUpdate', function(event, result) {
            vm.author = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
