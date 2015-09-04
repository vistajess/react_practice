

var RadioOtherOption = React.createClass({
    propTypes: {
        name : React.PropTypes.string.isRequired,
    },
    getInitialState: function() {
        return {
            checked: false
        };
    },
    onChange : function(event) {

        var input = event.target;
        this.setState({
            checked : input.checked
        });
       
    },
    componentDidUpdate : function(prevProps,prevState) {
        var input = this.refs.input.getDOMNode();
        console.log(input);
        if(prevState.checked !== input.checked) {
            this.setState({
                checked: input.checked
            });
        }
    },
    render : function() {
    return(
        <p>
            <label>
                <input ref="input" onChange={this.onChange} type="radio" name={this.props.name} value="other" />
                Other
            </label><br/>

            {this.state.checked && (
            <label>
                <strong>Please Specify:</strong>
                <input type="text" name="referrer_other" />
            </label>
            )}

            <p>
                <input type="submit" name="submit"value="Submit"/>
            </p>
        </p>
    );
  }
});