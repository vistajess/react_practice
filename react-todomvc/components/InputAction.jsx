var InputAction = React.createClass({
	getInitialState: function() {
		return{
			value: ''
		}
	},
	componentDidMount: function() {
		React.findDOMNode(document.querySelector('input')).focus();

	},
	onChange: function(event) {
		this.setState({
			value : event.target.value
		});
	},
	render: function(){
		var value = this.state.value;
		return(
			<div>
				<input type="text" name="input" input_text="input_text" ref="txt" value={value} onChange={this.onChange}/>
			</div>
		);
	}
});

