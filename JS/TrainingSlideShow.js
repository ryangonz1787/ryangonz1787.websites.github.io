
{
let i = 0; 			// Start Point
let images = [];	// Images Array
let time = 2000;	// Time Between Switch
						 
		// Image List
		images[0] = "PHOTOS/tennis1.jpg";
		images[1] = "PHOTOS/tennis2.jpg";
		images[2] = "PHOTOS/zumba1.jpg";
		images[3] = "PHOTOS/yoga1.jpg";
		images[4] = "PHOTOS/swim1.jpg";
		images[5] = "PHOTOS/cycling1.jpg";
				
				
		// Change Image
		function changeImg(){
		document.slide.src = images[i];

		// Check If Index Is Under Max
		if(i < images.length - 1){
		// Add 1 to Index
		i++; 
		} else { 
		// Reset Back To O
		i = 0;
		}

		// Run function every x seconds
		setTimeout("changeImg()", time);
		}

		// Run function when page loads
		window.onload = changeImg;
}		
