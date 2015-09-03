var Demo = React.createClass({
	render: function() {
        var radioOptions = [
        {
            value : "newspaper",label : "Newspaper"
        },
        {
            value : "radio",label : "Radio"
        },
        {
            value : "TV",label : "Television"
        },
        {
            value : "Social",label : "Social"
        }
        ];
		return  (	
			<span>
    		    <div className ="container">

    			     <label>How did you hear about us?</label><br/>

                    <RadioOptionGroup name="referrer" other={true} options={radioOptions} />
                    
                </div>
    	    </span>

		);
	}
});
