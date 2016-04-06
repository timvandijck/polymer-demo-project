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
    				"q": "kitten", 
    				"api_key": "dc6zaTOxFJmzC"
    			};
    		}
    	}
    }
});