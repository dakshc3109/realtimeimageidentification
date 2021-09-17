//This is main.js file

function preload(){

}

function setup(){
    canvas = createCanvas(200,200);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    image_Classifier =  ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-57PUIvXf/model.json", modelLoaded); 
}

function modelLoaded(){
    console.log('model Loaded');
}

function draw(){
    image(video, 0, 0, 300, 300);
    image_Classifier.classify(video, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error();
    }
    else{
        console.log(results);
        var object = results[0].label;
        var accuracy = results[0].confidence.toFixed(3);
        document.getElementById("result_object_name").innerHTML = object;
        document.getElementById("result_object_accuracy").innerHTML = accuracy;
    }
}