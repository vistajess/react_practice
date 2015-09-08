var ActionPanel = React.createClass({displayName: "ActionPanel",
	render: function() {
		return(
			React.createElement("div", null, 
				React.createElement(InputAction, null), 
				React.createElement(SubmitButton, null)
			)
		)
	}
});