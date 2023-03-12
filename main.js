function setup() {
canvas.mouseReleased(classifyCanvas);
}
function classifyCanvas() {
  classifier.classify(canvas, gotResult);
}

function modelLoaded() {
    console.log('Model Loaded!');
}

function draw() {
  strokeWeight(13);
  stroke(0);
  if(mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}
var previous_result = '';

function gotResult(error, results) {
  if (error) {
    console.error(error);
  } console.log(results);
drawnsketch = results[0].label;
document.getElementById("label").innerHTML = "Sketch: " + drawnsketch;
document.getElementById("confidence").innerHTML = "Confidence: " + Math.round(results[0].confidence* 100) + '%';
}

function preload() {
  classifier = ml5.imageClassifier("DoodleNet");
}

