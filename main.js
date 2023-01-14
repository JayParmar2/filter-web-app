nose_x = 0;
nose_y = 0;

function preload() {
     clown_nose = loadImage("https://i.postimg.cc/d0mkYc0G/clown.png");
     beard=loadImage("https://i.postimg.cc/wMhL7Rqb/R.png");
     glasses=loadImage("https://i.postimg.cc/wv3dqDVg/655da7add7df4498d943a9cb263a6f9a.png");


}

function draw() {
     image(video, 0, 0, 300, 300);
     image(clown_nose, nose_x, nose_y, 40, 40);
     image(beard,nose_x-55,nose_y+10,150,150);
     image(glasses,nose_x-70,nose_y-80,175,100);
}

function setup() {
     canvas = createCanvas(300, 300);
     canvas.center();
     video = createCapture(VIDEO);
     video.size(300, 300);
     video.hide();
     posenet = ml5.poseNet(video, modelloaded);
     posenet.on('pose', gotposes);

}


function modelloaded() {
     console.log("posenet is initialized");

}

function gotposes(results) {
     console.log(results);
     nose_x = results[0].pose.nose.x -15;
     nose_y = results[0].pose.nose.y -15;
     console.log("nose x = " + nose_x);
     console.log("nose y = " + nose_y);
}