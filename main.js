Canvas = document.getElementById("cnvs");
Caneta = Canvas.getContext("2d");
Cor = "indianRed";

var UpoX,UpoY
var eveeMOU = "supamonkee";

Canvas.addEventListener("mousedown", myMousedown);
function myMousedown(e) {
    Cor = document.getElementById("cor").value;
    espessura = document.getElementById("espessura");
    radius = document.getElementById("raio");
    eveeMOU = "mousedown";
}
Canvas.addEventListener("mousemove",Dehenhá);
function Dehenhá(e) {

    MouseX = e.clientX - Canvas.offsetLeft;
    MouseY = e.clientY - Canvas.offsetTop;
    if(eveeMOU == "mousedown"){
        Caneta.beginPath();
        Caneta.strokeStyle = Cor;
        Caneta.lineWidth = 4;
        Caneta.moveTo (UpoX,UpoY);
        Caneta.arc(MouseX, MouseY, radius, 0, 2 * Math.PI);
        Caneta.stroke();

    }
    UpoX= MouseX;
    UpoY= MouseY;
}
Canvas.addEventListener("mouseup",MouseUp);
function MouseUp(e) {
    eveeMOU = "mouseup";
}

Canvas.addEventListener("mouseleave",MouseLeave);
function MouseUp(e) {
    eveeMOU = "mouseleave";
}