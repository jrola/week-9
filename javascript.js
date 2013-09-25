
	
		//https://developer.apple.com/library/safari/documentation/AudioVideo/Conceptual/HTML-canvas-guide/DrawingLinesandShapes/DrawingLinesandShapes.html#//apple_ref/doc/uid/TP40010542-CH3-SW1
		
		var can = document.getElementById("can"),
			ctx = can.getContext("2d");

        function draw() {
		
			ctx.shadowOffsetX = 2;
			ctx.shadowColor = "black";
			ctx.shadowOffsetY = 2;
			ctx.shadowBlur=10;
			
			ctx.strokeStyle = "black";
			ctx.lineJoin = "square";
			ctx.lineCap = "square";
			ctx.lineWidth = 1;
			
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////			
			// lines
			ctx.beginPath();
			ctx.moveTo(100, 0); //x, y
			ctx.lineTo(100, can.height-40);						
			ctx.lineTo(can.width, can.height-40);
			
			for ( var i = 40; i < 500; i += 40 ) {
				ctx.moveTo(100, i); //x, y
				ctx.lineTo(can.width, i);
			
			}
			ctx.stroke();
			
			ctx.fillStyle = "red";
			ctx.font = "20pt Helvetica";
			ctx.fillText("Signal Strength", 250, can.height-370);	
			
			
			ctx.fillStyle = "green";
			ctx.font = "16pt Helvetica";
			ctx.fillText("2000", 150, can.height-10);
			
			//ctx.fillStyle = "blue";
			//ctx.fillRect(150, 100, 50, can.height-140);  // x, y, width, height
			
			
			ctx.fillStyle = "green";
			ctx.font = "16pt Helvetica";
			ctx.fillText("2005", 250, can.height-10);
			
			//ctx.fillStyle = "red";
			//ctx.fillRect(250, 250, 50, can.height-290);  // x, y, width, height
			
			ctx.fillStyle = "green";
			ctx.font = "16pt Helvetica";
			ctx.fillText("2010", 350, can.height-10);
			
			ctx.fillStyle = "green";
			ctx.font = "16pt Helvetica";
			ctx.fillText("2015", 450, can.height-10);
			
			ctx.fillStyle = "green";
			ctx.fillRect(350, 150, 50, can.height-190);  // x, y, width, height
			
			
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			
			//Numbers on left side
			
			ctx.fillStyle = "blue";
			ctx.font = "16pt Helvetica";
			ctx.fillText("100", 10, 40);
			
			ctx.fillStyle = "blue";
			ctx.font = "16pt Helvetica";
			ctx.fillText("90", 10, 80);
			
			ctx.fillStyle = "blue";
			ctx.font = "16pt Helvetica";
			ctx.fillText("80", 10, 120);
			
			ctx.fillStyle = "blue";
			ctx.font = "16pt Helvetica";
			ctx.fillText("70", 10, 160);
			
			ctx.fillStyle = "blue";
			ctx.font = "16pt Helvetica";
			ctx.fillText("60", 10, 200);
			
			ctx.fillStyle = "blue";
			ctx.font = "16pt Helvetica";
			ctx.fillText("50", 10, 240);
			
			ctx.fillStyle = "blue";
			ctx.font = "16pt Helvetica";
			ctx.fillText("40", 10, 280);
			
			ctx.fillStyle = "blue";
			ctx.font = "16pt Helvetica";
			ctx.fillText("30", 10, 320);
						
			ctx.fillStyle = "blue";
			ctx.font = "16pt Helvetica";
			ctx.fillText("20", 10, 360);
			
			
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
				//Yellow line
			
        }
		
		function drawLines() {
		
			ctx.strokeStyle = "orange";
			ctx.lineJoin = "square";
			ctx.lineCap = "round";
			ctx.lineWidth = 5;
			
			ctx.beginPath();

			ctx.moveTo(455, 50);

			ctx.lineTo(250, 250);
			ctx.lineTo(100, 320);
			
			
			ctx.stroke();
		
		}
		
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
				
				
		var greeny = 300,
			greenheight = can.height-340,
			
			redy = 350,
			redheight = can.height-390,
			
			extra = 360,
			extraheight = can.height-400,
			
			interval = setInterval(drawSteps, 100);
		
		
		
		
		function drawSteps() {
			
			if (  greeny <= 90 &&  redy <= 250 && extra <= 100) {
				 //callback, animations are done;
			} else {
				ctx.clearRect(0, 0, can.width, can.height);
				draw();
				
				if ( greeny < 100 ) {

					ctx.fillStyle = "red";
					ctx.fillRect(150, greeny, 50, greenheight);  // x, y, width, height
					greeny -= 10;
					greenheight += 10;
				} else {
					ctx.fillStyle = "green";
					ctx.fillRect(150, greeny, 50, greenheight);
				}
				
				if ( redy > 250 ) {
					ctx.fillStyle = "green";
					ctx.fillRect(250, redy, 50, redheight);  // x, y, width, height
					redy -= 10;
					redheight += 10;
				} else {
					ctx.fillStyle = "green";
					ctx.fillRect(250, redy, 50, redheight); 
				}
				
				
				if ( extra > 60 ) {
					ctx.fillStyle = "green";
					ctx.fillRect(450, extra, 50, extraheight);  // x, y, width, height
					extra -= 10;
					extraheight  += 10;
				} else {
					//ctx.fillStyle = "red";
					ctx.fillRect(450, extra, 50, extraheight); 
					clearInterval(interval);
					drawLines();
				}
				
			}
			
		}
		
		
