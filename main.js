function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(550,150);
    classifier=ml5.poseNet(video,modelLoaded());
    classifier.on('pose',gotPoses);

}
noseX=0;
noseY=0;
leftWristx=0;
rightWristx=0;
difference=0;

function modelLoaded(){
    console.log("modelLoaded");
}

function draw(){
    background('#969A97');
    fill('#590093');
    text("Bhavay",noseX,noseY);
    textSize(difference);
    
}


function gotPoses(results){
    console.log(results);
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log(" noseX="+ noseX +" noseY =" + noseY);

        leftWristx=results[0].pose.leftWrist.x;
        rightWristx=results[0].pose.rightWrist.x;
        difference= floor(leftWristx-rightWristx);
        console.log(difference);
        console.log(" leftWristx="+ leftWristx +" rightWristx =" + rightWristx);
    }
}