var RadioOption = React.createClass({
	propTypes: {
    value : React.PropTypes.string.isRequired,
		name : React.PropTypes.string.isRequired,
		children : React.PropTypes.node
	},
  	render : function() {
    return(
          <p>
          <span>{this.props.children}</span>
          <input type="radio" name ={this.props.name} value={this.props.value}/><br/>
          </p>
    );
  }
});