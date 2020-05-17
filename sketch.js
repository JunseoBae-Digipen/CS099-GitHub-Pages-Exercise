// Name: Junseo Bae
// Assignment Name: Random Grade Generator
// Course Number: CS099
// Term & Year: Spring 2020s

var grade = 0;
var percentage = 0;
var leastvalue = 0;
var largestvalue = 100;
var roundpercentage = 0;
function setup() {
  createCanvas(400, 400);
  percentage = random(leastvalue, largestvalue);
  roundpercentage = round(percentage);
}

function draw() {
  background(220);
  if (percentage <= 100 && percentage >= 97) {
    grade = 'A+'
  } else if (percentage <= 96 && percentage >= 93) {
    grade = 'A'
  } else if (percentage <= 92 && percentage >= 90) {
    grade = 'A-'
  } else if (percentage <= 89 && percentage >= 87) {
    grade = 'B+'
  } else if (percentage <= 86 && percentage >= 83) {
    grade = 'B'
  } else if (percentage <= 82 && percentage >= 80) {
    grade = 'B-'
  } else if (percentage <= 79 && percentage >= 77) {
    grade = 'C+'
  } else if (percentage <= 76 && percentage >= 73) {
    grade = 'C'
  } else if (percentage <= 72 && percentage >= 70) {
    grade = 'C-'
  } else if (percentage <= 69 && percentage >= 67) {
    grade = 'D+'
  } else if (percentage <= 66 && percentage >= 63) {
    grade = 'D'
  } else if (percentage <= 62 && percentage >= 60) {
    grade = 'D-'
  } else {
    grade = 'F'
  }
  text("grade" + ":" + grade, width/2 - 50, height/2);
  text("percentage" + ":" + roundpercentage + "%", width / 2 - 50, height /2 + 20);
}
function mouseReleased() {
  percentage = random(leastvalue, largestvalue);
  roundpercentage = round(percentage);
}
