Polymer({
    is: 'binding-demo', // Polymer requires a dash in the component name!

    properties: {
    	firstName: {
    		type: String
    	},
    	lastName: {
    		type: String
    	},
    	customMessage: {
    		type: String,
    		value: function() {
    			return 'Default message!';
    		},
    		reflectToAttribute: true,
            notify: true,
    	}
    }
});