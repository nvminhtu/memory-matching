angular.module('mg.directives', [])
.directive('card',function() {
    return {
        restrict : 'E',
        replace : true,
        scope:{
            card:'=',
            selected:'&'
        },
        template:'<div class="card animated" ng-class="{flipInY:card.selected,flipOutY:card.dimiss}" ng-click="selected();">'
                    + '<div ng-show="!card.selected" class="front"></div>'
                    + '<div ng-show="card.selected" class="back" style="color:{{card.color}}"><i class="icon-{{card.icon}}"></i></div>'
                +'</div>'    
        }
})
.directive('progress',function() {
    return {
        restrict : 'E',
        replace : true,
        scope:false,
        template:'<div class="animated zoomIn progress-box" ng-show="!isWinned">'
                    +'<div ng-show="progress>0" class="progress"><div style="width:{{progress}}%"></div></div>'
                    +'<div ng-show="progress<1" class="gameover"> Game Over (- - !)</div>'
                +'</div>'    
    }
});