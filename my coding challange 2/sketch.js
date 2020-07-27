function setup(){
  createCanvas(400,400);
  angleMode(DEGREES);
}
function draw(){
    background(0);
    translate(200,200);
    rotate(-90);

    var hr = hour();
    var mn = minute();
    var sec = second();
    
    strokeWeight(8);
    stroke(255, 100, 150);
    noFill();
    var secondAngle = map(sec, 0, 60, 0, 360);
    arc(0, 0, 300, 300, 0, secondAngle);

    stroke(150, 100, 255);
    var minAngle = map(mn, 0, 60, 0, 360);
    arc(0, 0, 270, 270, 0, minAngle);

    stroke(150, 255, 100);
    var hourAngle = map(hr % 12, 0, 12, 0, 360);
    arc(0, 0, 240, 240, 0, hourAngle);

    push();
    rotate(secondAngle);
    stroke(255, 100, 150);
    line(0, 0, 100, 0);
    pop();

    push();
    rotate(minAngle);
    stroke(150, 100, 255);
    line(0, 0, 75, 0);
    pop();

    push();
    rotate(hourAngle);
    stroke(150, 255, 100);
    line(0, 0, 50, 0);
    pop();

    stroke(255);
    point(0, 0)

   
     // angleMode(0);
     push();
      fill(255);
      noStroke();
      textSize(10);
      text(hr + ":" + mn + ":" + sec, 10, 20);
      pop();

    if(keyCode == 32){
     
    }
    drawSprites();
}

