Polymer({
    is: 'giphy-search', // Polymer requires a dash in the component name!

    properties: {
    	searchString: {
    		type: String,
    		reflectToAttribute: true,
            notify: true,
    	},

    	ironParams: {
    		type: Object,
    		value: function() {
    			return {
    				"q": "", 
    				"api_key": "dc6zaTOxFJmzC"
    			};
    		}
    	}
    },

    handleSearchClick: function(e, detail) {
        var ajaxRequest = document.querySelector('#ajaxGiphy');
        
        ajaxRequest.params = {
            "q": this.searchString, 
            "api_key": "dc6zaTOxFJmzC",
            "limit": 2
        };

        ajaxRequest.generateRequest();
    }
});