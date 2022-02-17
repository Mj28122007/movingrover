var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
rover_width = 100;
rover_height = 90;
nasa_images_array = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
random_number = Math.floor(Math.random()* 4);
console.log(random_number);
roverX = 10;
roverY = 10;
backgroundimage = nasa_images_array[random_number];
console.log("Background image" + backgroundimage);
roverimage = "rover.png";

function add(){
    backgroundimage_Tag = new Image();
    backgroundimage_Tag.onload = uploadbackground;
    backgroundimage_Tag.src = backgroundimage;

    roverimage_Tag = new Image();
    roverimage_Tag.onload = uploadrover;
    roverimage_Tag.src = roverimage;
}
function uploadbackground(){
    ctx.drawImage(backgroundimage_Tag, 0, 0, canvas.width, canvas.height);
    
}
function uploadrover(){
    ctx.drawImage(roverimage_Tag, roverX, roverY, rover_width, rover_height);
    
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed == '38'){
      console.log("up");
      up();
    }
    if (keypressed == '40'){
        console.log("down");
        down();
      }
      if (keypressed == '37'){
        console.log("left");
        left();
      }
      if (keypressed == '39'){
        console.log("right");
        right();
      }
}
function up(){
  if(roverY>=0){
    roverY = roverY-10;
    console.log("when up arrow is pressed, x = " + roverX + " y = " + roverY);
    uploadbackground();
    uploadrover();
  }
}
function down(){
  if(roverY<=500){
    roverY = roverY+10;
    console.log("when down arrow is pressed, x = " + roverX + " y = " + roverY);
    uploadbackground();
    uploadrover();
  }
}
function left(){
  if(roverX>=0){
    roverX = roverX-10;
    console.log("when left arrow is pressed, x = " + roverX + " y = " + roverY);
    uploadbackground();
    uploadrover();
  }
}
function right(){
  if(roverX<=700){
    roverX = roverX+10;
    console.log("when right arrow is pressed, x = " + roverX + " y = " + roverY);
    uploadbackground();
    uploadrover();
  }
}