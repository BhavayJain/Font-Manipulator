function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(550,150);
    classifier=ml5.poseNet(video,modelLoaded());
    classifier.on('pose',gotPoses);

}

function modelLoaded(){
    console.log("modelLoaded");
}

function draw(){
    background('#969A97');
}


function gotPoses(results){
    console.log(results);
}