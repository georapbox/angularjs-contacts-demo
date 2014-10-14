'use strict';

/* Animations Services */
contactsApp.jsAnimations = angular.module('contactsApp.animations_services', []);

if(!Modernizr.csstransitions || !Modernizr.cssanimations){
    // Fade Animation
    contactsApp.jsAnimations.animation('.fadeIn', function(){
        return {
            enter: function(element, done) {
                jQuery(element).css({ opacity: 0 });
                jQuery(element).animate({ opacity: 1 }, 200, done);

                return function(cancelled) {
                    if(cancelled) {
                        jQuery(element).stop();
                    }
                };
            },
            leave: function(element, done) { 
                jQuery(element).css({ opacity: 1 });
                jQuery(element).animate({ opacity: 0 }, 200, done);   
            },
            move: function(element, done) { done(); },
            addClass: function(element, className, done) { done(); },
            removeClass: function(element, className, done) { done(); }
        };
    });

    // Slide In Left Animations
    contactsApp.jsAnimations.animation('.slideInLeft', function(){
        return {
            enter: function(element, done) {
                jQuery(element).css({ marginLeft: '-100%' });
                jQuery(element).animate({ marginLeft: '0%' }, 600, done);

                return function(cancelled) {
                    if(cancelled) {
                        jQuery(element).stop();
                    }
                };
            },
            leave: function(element, done) {
                jQuery(element).css({ marginLeft: '0%' });
                jQuery(element).animate({ marginLeft: '-100%' }, 600, done);
            },
            move: function(element, done) { done(); },
            addClass: function(element, className, done) { done(); },
            removeClass: function(element, className, done) { done(); }
        };    
    });
}