var Demo = React.createClass({displayName: "Demo",
	render: function() {
        var radioOptions = [
        {
            value : "newspaper",label : "Newspaper"
        },
        {
            value : "radio",label : "Radio"
        },
        {
            value : "TV",label : "Television"
        },
        {
            value : "Social",label : "Social"
        }
        ];
		return  (	
			React.createElement("span", null, 
    		    React.createElement("div", {className: "container"}, 

    			     React.createElement("label", null, "How did you hear about us?"), React.createElement("br", null), 

                    React.createElement(RadioOptionGroup, {name: "referrer", other: true, options: radioOptions})
                    
                )
    	    )

		);
	}
});
