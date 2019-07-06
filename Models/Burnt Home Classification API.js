//npm
npm install --save watson-developer-cloud

//Authentication
var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');

var visualRecognition = new VisualRecognitionV3({
	version: '{version}',
	iam_apikey: 'ilkAm7CAPEWS5FXEz6eUYoNbqfJ-w76_R5FgQgBjhEv9'
});

//Classify an image
var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var fs = require('fs');

var visualRecognition = new VisualRecognitionV3({
	version: '2018-03-19',
	iam_apikey: 'ilkAm7CAPEWS5FXEz6eUYoNbqfJ-w76_R5FgQgBjhEv9'
});

var images_file= fs.createReadStream('./fruitbowl.jpg');
var classifier_ids = ["CountBurnedHomes_623969715"];
var threshold = 0.6;

var params = {
	images_file: images_file,
	classifier_ids: classifier_ids,
	threshold: threshold
};

visualRecognition.classify(params, function(err, response) {
	if (err) { 
		console.log(err);
	} else {
		console.log(JSON.stringify(response, null, 2))
	}
});