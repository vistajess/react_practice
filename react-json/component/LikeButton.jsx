var LikeButton = React.createClass({
	getInitialState : function() {
		return {
			liked: false
		}
	},
	actionHandler: function() {
		this.setState({
			liked: !this.state.liked
		});	
	},
	render: function() {
		var status = this.state.liked;
		var text = "";
		status ? text = "Liked" : text = "Unliked";
		return(
			<div onClick={this.actionHandler}>
				You have {text}
			</div>
		);
	}

});

