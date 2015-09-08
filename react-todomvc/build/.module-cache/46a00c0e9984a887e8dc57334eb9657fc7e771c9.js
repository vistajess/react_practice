var List = React.createClass({displayName: "List",
	render:function() {
		return(
			React.createElement("ul", null, 
		
			    my_array.map(function(option){
            
	                return (
	                   	React.createElement("li", {key: option}, option, " ", React.createElement(DeleteButton, null))
	                );
                
            	})
			)
		);
	}
});