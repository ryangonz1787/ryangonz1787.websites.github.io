{		
		
	
		//fetch JSON file
		fetch("./Training.json")
			.then(function(resp) {
				return resp.json();
			})
			.then(function(data) {
				console.log(data);
			})
			
}