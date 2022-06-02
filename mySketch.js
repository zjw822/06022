var colors = "ffbe0b-fb5607-ff006e-8338ec-3a86ff".split("-").map(a=>"#"+a)
class Ball{
	constructor(args){ //參數預設值(工廠)
		this.r= args.r || random(200)  //  ||符號主要設定優先使用args.r，如果沒有傳args.r參數，採用下一個值
		this.p= args.p || {x:random(width),y:random(height)}  
		this.v= args.v || {x:random(-1,1),y:random(-1,1)}
		this.a= args.a || {x:0,y:0.2}
		this.color = random(colors)
	}	
	
	draw(){  //  繪製函數
		push()
			translate(this.p.x, this.p.y)
			fill(this.color)
			ellipse(0, 0 , this.r);
			ellipse(-this.r/2, -this.r/2 , this.r/2);
			ellipse(this.r/2, -this.r/2 , this.r/2);
			fill("#ffff00")
			ellipse(this.r/4, -this.r/4 , this.r/8);
			ellipse(-this.r/4, -this.r/4 , this.r/8);
			fill(255)
			// arc(0,0,this.r/2,this.r/2,0,PI)			
			ellipse(0, 0 , this.r/2);
			fill(0)
			// arc(0,0,this.r/3,this.r/2,0,PI)
			ellipse(0, 0 , this.r/3);
		pop()
	}
	
	update(){
		this.p.x=this.p.x+this.v.x
		this.p.y+=this.v.y
		this.v.x=this.v.x+this.a.x
		this.v.y=this.v.y+this.a.y
		
		
		if(this.p.y>height){
			this.v.y=-abs(this.v.y)
		}
	}
}
var ball
var balls=[]  //宣告一個陣列
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	for(var i=0;i<10;i++){
		ball = new Ball({a:{x:0,y:0.1},p:{x:width/2,y:0}})
		balls.push(ball)
	}	
}

function draw() {
	background(0);
	for(var i=0;i<balls.length;i++){
		let ball = balls[i];	
		ball.draw()//繪製
		ball.update()//動作(移動)
	}
}