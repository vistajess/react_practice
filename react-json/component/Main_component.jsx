var Main_component = React.createClass({
	render : function() {
		var my_obj = [{
				Name: "Jess",
				address: "arista",
				position: "front-end developer"	
		},
		{
				Name: "Randolf",
				address: "arista",
				position: "Designer developer"	
		}
		];
		
		return(
			
			<div className="ok">
			<h2>Main_component Class</h2>
			
			<Customers capacity="20" url="customer.json"/>
			</div>
		);
	}
});