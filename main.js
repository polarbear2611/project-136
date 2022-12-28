status="";
input="";

function preload()
{

}

function setup()
{
    canvas=createCanvas(480,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video,0,0,480,380);
}

function start()
{
    objectdetector = ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innnerHTML = "Detecting objects";
    input=document.getElementById("input").value;
}

function modelloaded()
{
    console.log("model loaded");
    status=true;
}