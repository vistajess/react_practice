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
			
			{my_obj.map(function(value){
                return (
                	<div key={value.Name}>
                    Name : {value.Name}<br/> 
                    Address : {value.address} <br/>
                    </div>
                )
            })}

  			<Customers capacity="20"/>
			</div>
		);
	}
});