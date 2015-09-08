var my_array = [];
var SubmitButton = React.createClass({displayName: "SubmitButton",
	getInitialState : function() {
		return {
			arr : my_array
		}
	},
	UpdateArray : function() {
		this.setState({
			arr : my_array
		});
	},
	Print: function(event) {
		var text = event.target.value;
		var msg = document.querySelector('input').value;
		console.log("this is Arr" +this.state.arr);
		my_array.push(msg);
		this.setState({
			arr : my_array
		});
		this.refs.div_submit.forceUpdate();
		console.log(document.querySelector('input').value);

		console.log(my_array);
	},
	render: function() {

		return(
			React.createElement("div", {ref: "div_submit"}, 
				React.createElement("button", {onClick: this.Print, ref: "input_text"}, "Click"), 
				React.createElement(List, null)
			)
		);
	}
});