'use strict';

/* Directives */
contactsApp.directives = angular.module('contactsApp.directives', []).

// Toggle Contact Options
directive('toggleContactOptions', function(){
    return {
    	restrict: 'A',
    	link: function(scope, elm, attrs){
    		elm.on('click', function (event){
    			event.stopPropagation();
    			$('.optionsHandler').not($(this)).removeClass('active');
    			$('.contactOptions.visible').removeClass('visible');
    			
    			if(elm.hasClass('active')){
    				elm.removeClass('active');
    				elm.next().removeClass('visible');
    			} else {
    				elm.addClass('active');
    				elm.next().addClass('visible');
    			}
    		});
    	}
    };
}).

// Hide Contact Options
directive('hideContactOptions', function(){
	return {
		restrict: 'A',
		link: function(scope, elm, attrs){
			elm.on('click', function(){
				$('.optionsHandler').removeClass('active');
				$('.contactOptions.visible').removeClass('visible');
			});
		}
	};
}).

// Effect on contacts mouse over
directive('rolloverEffect', function(){
    return {
        restrict: 'A',
        link: function(scope, elm, attrs){
            elm.on('mouseover', function(){
                elm.addClass(attrs.effect);
            });

            elm.on('mouseout', function(){
                elm.removeClass(attrs.effect);
            });
        }
    };
}).

// Redirect to state 
directive('changeState', function($timeout, $state){
    return {
        restrict: 'A',
        link: function(scope, elm, attrs){
            elm.on('click', function(){
                $timeout(function(){
                    $state.go(attrs.sref);
                }, attrs.srefDelay);
            });
        }
    };
});