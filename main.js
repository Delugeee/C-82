canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "";
var current_position_of_x,current_position_of_y;
var last_position_of_x,last_position_of_y;
color = "black";
width = 1;
canvas.addEventListener("mouseDown", my_mouseDown);
function my_mouseDown(e){
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    mouseEvent = "mouseDown";

}
canvas.addEventListener("mouseUp",my_mouse_up);
function my_mouse_up(e){
    mouseEvent = "mouseUp";

}
canvas.addEventListener("mouseLeave",my_mouseLeave);
function my_mouseleave(e){
    mouseEvent = "mouseLeave";

}
canvas.addEventListener("mouseMove",my_mouse_Move);
function my_mouse_Move(e){
    current_position_of_x = e.clientX-canvas.offsetLeft;

current_position_of_y = e.clientY-canvas.offsetTop;
if(mouseEvent=="mouseDown"){

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.width  = width;
    console.log("last position of x and y = ");
    console.log("x= "+last_position_of_x+"y= "+last_position_of_y);
    ctx.moveTo(last_position_of_x,last_position_of_y);

    console.log("current position of x and y = ");
    console.log("x= "+current_position_of_x+"y= "+current_position_of_y);
    ctx.lineTo(current_position_of_x,current_position_of_y);
    ctx.stroke();
   
}
last_position_of_x = current_position_of_x;
last_position_of_y = current_position_of_y;


}  