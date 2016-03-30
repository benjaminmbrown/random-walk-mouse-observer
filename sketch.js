

function setup() {
  console.log('setting up');
  createCanvas(400, 400);
  // Create object
  walker = new Walker();
  background(255);

}

function draw() {

  walker.step();
  walker.display();
}

function Walker (){
	this.x = 150;
	this.y = 150;

	this.display = function(){
		stroke(0);
		point(this.x,this.y);
	}

	this.step = function(){
		var r = random(1);
		var posDiff = {x:mouseX-this.x, y:mouseY-this.y};
		console.log(posDiff);


		if(r < 0.5){
			if(posDiff.x >0){
				this.x++;
			}
			if(posDiff.y >0){
				this.y++;
			}
			if(posDiff.x <0){
				this.x--;
			}
			if(posDiff.y <0){
				this.y--;
			}
		}else{
			 if (r < 0.25) {
 		      this.x++;
 			    } 
 			    else if (r < 0.50) {
 			      this.x--;
 			    } 
 			    else if (r < 0.75) {
 			      this.y++;
 			    } 
 			    else {
 			      this.y--;
 		    }
		}

		// if (r < 0.25) {
 	// 	      this.x++;
 	// 		    } 
 	// 		    else if (r < 0.50) {
 	// 		      this.x--;
 	// 		    } 
 	// 		    else if (r < 0.75) {
 	// 		      this.y++;
 	// 		    } 
 	// 		    else {
 	// 		      this.y--;
 	// 	    }
	}
}