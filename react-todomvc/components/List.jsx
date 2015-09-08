
var List = React.createClass({
	getInitialState: function(){
		return {
			arr : [
				{ msg: 'hello'},
				{ msg: 'hi'},
				{ msg: 'babe'},
				{ msg: 'bae'},
			]
		}
	},

	DeleteMe: function(index) {
		return function () {
			this.setState({
				arr: this.state.arr
					.filter(function(item, i) {
						return index !== i;
					})
			})
		}.bind(this);

	},
	render:function() {

		return(
			<ul>

			    {this.state.arr.map(function(item, i) {
	                return (
	                   	<li key={i}>
	                   		{item.msg}
	                   		<button ref="del" onClick={this.DeleteMe(i)}>
	                   			Delete
	                   		</button>
	                   	</li>
	                );
                
            	}.bind(this))} 
			</ul>
		);
	}
});