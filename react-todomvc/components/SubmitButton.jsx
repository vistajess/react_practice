var my_array = [];
var key = 0;
var SubmitButton = React.createClass({
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
		var obj = {
			index : my_array.length,
			msg : msg
		};
		console.log("this is Arr" +this.state.arr);
		my_array.push(obj);
		this.setState({
			arr : my_array
		});
		key++;
		var input_text = React.findDOMNode(document.querySelector('input'));
		input_text.value = "";
	},
	render: function() {

		return(
			<div ref="div_submit">
				<button onClick={this.Print} ref="input_text">Click</button>
				<List />
			</div>
		);
	}
});