

var RadioOtherOption = React.createClass({
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
  render : function() {
    return(
        <p>
            <label>
                <input onChange={this.onChange} type="radio" name ="referrer" value="other" />
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