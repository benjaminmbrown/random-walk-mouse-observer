

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
	console.log('walker constructor');
	this.x = 150;
	this.y = 150;

	this.display = function(){
		stroke(0);
		point(this.x,this.y);
	}
	this.step = function(){
		//var choice = Math.floor(Math.random() * (4 - 0)) + 0;
		var r = random(1);
		
	
			if (mouseX > 200) {
			  if (r < 0.5) {
			      this.x++;
			    } else if (r < 0.65) {
			      this.x--;
			    } else if (r < 0.85) {
			      this.y++;
			    } else {
			      this.y--;
			    }
		    } else if (mouseX<200) {
		    	if (r < 0.5) {
			      this.x--
			    } else if (r < 0.65) {
			      this.x++;
			    } else if (r < 0.85) {
			      this.y++;
			    } else {
			      this.y--;
			    }
		      
		    } else if (mouseY>200) {
		      if (r < 0.5) {
			      this.y++;
			    } else if (r < 0.65) {
			      this.x--;
			    } else if (r < 0.85) {
			      this.x++;
			    } else {
			      this.y--;
			    }
		    } else {
		      if (r < 0.5) {
			      this.y--;
			    } else if (r < 0.65) {
			      this.x--;
			    } else if (r < 0.85) {
			      this.y++;
			    } else {
			      this.x++;
			    }
		    }
			//50% chance of moving in the direction 

		

		
	}


}