var MyApp = React.createClass({displayName: "MyApp",

	render: function() {
		var my_array = [];
		var input = "";
		return(
		React.createElement("div", {className: "hello"}, 
			React.createElement("h2", null, "TODO MVC IN REACT"), 
			React.createElement(ActionPanel, null)

		
		)	
		);
	}
});