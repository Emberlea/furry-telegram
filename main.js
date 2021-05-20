var mac= new fabric.Canvas("mc");

var s_x=200;
var s_y=200;

var bl_h=30;
var bl_w=30;

var super_o="";
var block_o="";

function first(){
    fabric.Image.fromURL("Screenshot 2021-05-15 123623.png",function (Img){
        super_o=Img;
        super_o.scaleToWidth(100);
        super_o.scaleToHeight(150);
        super_o.set({
            top:s_x,
            left:s_y
        });
        canvas.add(super_o);
    });
}
function second(){
    fabric.Image.fromURL(get_img,function (Img){
        block_o=Img;
        block_o.scaleToWidth(100);
        block_o.scaleToHeight(150);
        block_o.set({
            top:s_x,
            left:s_y
        });
        canvas.add(block_o);
    });
}
window.addEventListener("keydown",kd);
function kd(e){
    keyclick= e.keyCode;

    if(e.shiftKey==true && keyclick=='80'){
        bl_h=bl_h+10;
        bl_w=bl_w+10;
        document.getElementById("c_h").innerHTML=bl_h;
        document.getElementById("c_w").innerHTML=bl_w;
    }
}