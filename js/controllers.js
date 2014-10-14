'use strict';

/* Controllers */
angular.module('contactsApp.controllers', []).
	
// Catalogue Controller
controller('CatalogueCtrl', ['$scope', '$state', '$http', '$timeout', '$stateParams', 'getAllContacts', 'ShareContact', function($scope, $state, $http, $timeout, $stateParams, getAllContacts, ShareContact) {
	// Get All Contacts
	$scope.data = getAllContacts.getItems();

	// Ordering and Sorting
	$scope.orderProp = 'name';
	$scope.sortType = {
		ascending: true
	};

	$scope.changeSortType = function(sortType){
		$scope.sortType.ascending = sortType;
	};

	$scope.sortBy = function(prop){
		switch($scope.sortType.ascending){
			case true: $scope.orderProp = prop;
			break;
			case false: $scope.orderProp = '-' + prop;
			break;
			default: $scope.orderProp = prop;
		}
	};

	// Show Message
	$scope.message;
	$scope.showMsg = function(type, message, contactID){
		var inlineMessage = $('#inlineMessage_' + contactID);
        $scope.message = message;
		
		switch(type){
			case 'success': inlineMessage.addClass('success');
			break;
			case 'error': inlineMessage.addClass('error');
			break;
		}

		inlineMessage.fadeIn();
		$timeout(function(){
			$('#inlineMessage_' + contactID).fadeOut();	
		}, 5000);
	};

	// Update contact
	$scope.updateContact = function(contact){
		$scope.master = {};
		$scope.master = angular.copy(contact);

		$http({
		    url: 'rnfunctions/update_contact.php?id=' + $scope.master.id,
		    method: 'POST',
		    data: $scope.master,
		    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}).success(function() {
			$scope.showMsg('success', 'Contact was successfully saved.', $scope.master.id);
		}).error(function(data, status) {
		    if(status == 500){
		    	$scope.showMsg('success', 'Contact was successfully saved.', $scope.master.id);
		    } else {
		    	$scope.showMsg('error', 'There was an error while saving.', $scope.master.id);
		    }
		});
	};

	// Save contact item to reuse it when deleting
	$scope.saveContactItem = function(item){
		ShareContact.contactItem = item;
	};
}]).

// Delete Contact Controller
controller('DeleteContactCtrl', ['$scope', '$stateParams', '$state', '$http', 'ShareContact', function($scope, $stateParams, $state, $http, ShareContact){
	// Remove contact item from array
	$scope.removeContact = function(item){
		var itm = $scope.data.contacts.indexOf(item);	
		$scope.data.contacts.splice(itm, 1);
	};

	// Delete Contact from database
	$scope.deleteContact = function(){
		$http({
		    url: 'rnfunctions/delete_contact.php?id=' + $stateParams.contactID,
		    method: 'POST',
		    data: $scope.master,
		    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}).success(function() {
			$state.go('catalogue');
			$scope.removeContact(ShareContact.contactItem.index);
		}).error(function(data, status) {
		    if(status == 500){
		    	$state.go('catalogue');
		    	$scope.removeContact(ShareContact.contactItem.index);
		    } else {
		    	$state.go('catalogue');
		    	alert('There was an error while deleting.');
		    }
		});
	};

	$scope.leaveState = function(){
		$scope.on = false;
	};
}]).

// Add Contact Controller
controller('AddContactCtrl', ['$scope', '$http', '$timeout', function($scope, $http, $timeout){
	// Add new Contact
	$scope.addContact = function(contact){
		$scope.master = {};
		$scope.master = angular.copy(contact);	

		$http({
			url: 'rnfunctions/add_contact.php',
			method: 'POST',
			data: $scope.master,
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}).success(function() {
			$scope.data.contacts.push($scope.master);
			$scope.showMsg('success', 'Contact was successfully added.');
		}).error(function(data, status){
			if(status == 500){
		    	$scope.data.contacts.push($scope.master);
		    	$scope.showMsg('success', 'Contact was successfully added.');
		    } else {
		    	$scope.showMsg('success', 'There was an error while adding new contact.');
		    }
		});	
	};

	// Show Message
	$scope.message;
	$scope.showMsg = function(type, message){
		var addContactMsg = $('#addContactMsg');
        $scope.message = message;
		
		switch(type){
			case 'success': addContactMsg.addClass('success');
			break;
			case 'error': addContactMsg.addClass('error');
			break;
		}

		addContactMsg.fadeIn();
		$timeout(function(){
            addContactMsg.fadeOut();
		}, 3000);
	};

	$scope.leaveState = function(){
		$scope.on = false;
	};
}]);