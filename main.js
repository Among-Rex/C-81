canvas = document.getElementById("my_canvas");
ctx = canvas.getcontext("2D");
color = "red";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();