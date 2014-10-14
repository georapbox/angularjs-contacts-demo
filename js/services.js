'use strict';

/* Services */
angular.module('contactsApp.services', []).

// Get All Contacts
factory('getAllContacts', ['$http', function ($http) {
    var items = {};
    items.data = {};

    items.getItems = function() {
        var config = {
            cache: true
        };

        $http.get('rnfunctions/get_contacts.php', config).success(function(data) {
            items.data.contacts = data;
        });

        return items.data;
    };
    return items;         
}]).

// Set index of contact to share it between controllers
factory('ShareContact', function(){
    return {
        contactItem: null,
        pp: 'lorem'
    };
});