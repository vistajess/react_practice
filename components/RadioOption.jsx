var RadioOption = React.createClass({
	propTypes: {
		value : React.PropTypes.string,
		children : React.PropTypes.node
	},
  	render : function() {
    return(
          <p>
          <span>{this.props.children}</span>
          <input type="radio" name ="referrer" value={this.props.value}/><br/>
          </p>
    );
  }
});