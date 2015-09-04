var Customers = React.createClass({
	render : function() {
		return(
			<div className="ok">
			<h2>THIS IS THE CUSTOMER CLASS</h2>

			{this.props.capacity}
			
			</div>
		);
	}
});