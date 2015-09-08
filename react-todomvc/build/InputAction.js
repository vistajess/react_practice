var InputAction = React.createClass({displayName: "InputAction",

	render: function(){
		return(
			React.createElement("div", null, 
				React.createElement("input", {type: "text", name: "input", input_text: "input_text", object: "asd"})
			)
		);
	}
});