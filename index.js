var model = undefined;
const classifierElement = document.getElementById('classifier');
const loaderElement = document.getElementById('loader');

function changeImage() {
    var imageDisplay = document.getElementById('img');
    var uploadedImage = document.getElementById('my-file-selector').files[0];
    imageDisplay.src = URL.createObjectURL(uploadedImage);
}

async function predict () {

    const imageElement = document.getElementById('img');
    let tensorImg = tf.browser.fromPixels(imageElement).resizeNearestNeighbor([150, 150]).toFloat().expandDims();
    prediction = await model.predict(tensorImg).data();

    if (prediction[0] == 0) {

        alert("You uploaded a dog! 🐶");

    } else if (prediction[0] == 1) {

        alert("You uploaded a cat! 🐱");

    } else {
        alert("Something went wrong... AS USUAL 😇");
    }

}

async function initialize() {

    model = await tf.loadLayersModel('usable-model/model.json');
    classifierElement.style.display = 'block';
    loaderElement.style.display = 'none';

    document.getElementById('predict').addEventListener('click', () => predict());

}

initialize();