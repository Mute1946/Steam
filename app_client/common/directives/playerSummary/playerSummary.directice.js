(function () {

  angular
    .module('steamApp')
    .directive('playerSummary', playerSummary);

  function playerSummary () {
    return {
      restrict: 'EA',
      scope: {
        summary : '=info',
      },      
      templateUrl: '/common/directives/playerSummary/playerSummary.template.html'
    };
  }
})();