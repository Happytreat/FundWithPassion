# pip
##pip install --upgrade "watson-developer-cloud>=2.4.1"

# Authentication
from watson_developer_cloud import VisualRecognitionV3

apikey = "ilkAm7CAPEWS5FXEz6eUYoNbqfJ-w76_R5FgQgBjhEv9"

visual_recognition = VisualRecognitionV3(
    version='{version}',
    iam_apikey=apikey
)

# Classify an image
import json
from watson_developer_cloud import VisualRecognitionV3

visual_recognition = VisualRecognitionV3(
    '2018-03-19',
    iam_apikey=apikey)

with open('./pexels-photo-617278.jpeg', 'rb') as images_file:
    classes = visual_recognition.classify(
        images_file,
        threshold='0.6',
	classifier_ids='CountBurnedHomes_623969715').get_result()
print(json.dumps(classes, indent=2))
