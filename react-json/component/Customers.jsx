var Customers = React.createClass({
	getInitialState: function(){
		return {
			value : "Hello!",
			url : "customer.json",
			my_data : []
		};
	},
	componentDidMount : function() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(obj) {
				this.setState(obj)
			}.bind(this),
			error: function(xhr,status,err) {
				console.error(this.props.url,status,err.toString());
			}.bind(this)
		});
	},
	handleChange: function(event) {
		this.setState({
			value: event.target.value
		});
	},
	onChange : function(event) {
		this.setState({
			value : event.target.value,
			data_ko : "pogi"
		});
	},
	printText: function() {

		React.render(
			<div>
				{this.state.value}
				{this.state.data_ko}
			</div>,
			document.getElementById('text_here')
		);
	},
	render : function() {
		var value = this.state.value;
		return(
			<div>
				<div className="ok" data = {this.state.obj}>
				<h2>THIS IS THE CUSTOMER CLASS</h2>
				
				{this.props.capacity}<br/>	
				<input type="text" value={value} onChange={this.onChange}/><br/>
				<button onClick={this.printText}> CLICK TO PRINT</button>
				<span id="text_here"></span>
				</div>
				<div id="hello"></div>
			</div>
		);
	}
});