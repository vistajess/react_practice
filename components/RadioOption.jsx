var RadioOption = React.createClass({
  render : function() {
    return(
          <p>
          <span>{this.props.children}</span>
          <input type="radio" name ="referrer" value={this.props.value}/><br/>
          </p>
    );
  }
});