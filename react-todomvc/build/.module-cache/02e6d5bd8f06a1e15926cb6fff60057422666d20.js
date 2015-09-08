var DeleteButton = React.createClass({displayName: "DeleteButton",
	Delete: function(event) {
		console.log(event.target);
		console.log(React.unmountComponentAtNode(event.target));
	},
	render: function(){
		return(
			React.createElement("button", {ref: "del", onClick: this.Delete}, "x")
		);
	}
});