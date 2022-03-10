function onClickWeighter() {

    var height = parseInt(document.getElementById("height").value);
    var weight = parseInt(document.getElementById("weight").value);
    var gender = document.getElementById("gender").value;
    var age = parseInt(document.getElementById("age").value);
    var smoke = document.getElementById("smoke").value;
    var alcohol = document.getElementById("alcohol").value;
    var estimate = document.getElementById("result");

    if (gender == "Male") {
      gender = 1;
    } else if (gender == "Female") {
        gender = 2;
    } else {
        gender = -1;
    }

    if (smoke == "Yes") {
      smoke = 1;
    } else if (smoke == "No") {
        smoke = 0;
    } else {
        smoke = -1;
    }

    if (alcohol == "Yes") {
      alcohol = 1;
    } else if (alcohol == "No") {
        alcohol = 0;
    } else {
        alcohol = -1;
    }

    var url = "http://127.0.0.1:5000/weighter_predictions";

    if (isNaN(height)) {
        alert('Required Input. Please, type in your Height!');
    } else if (isNaN(weight)) {
        alert('Required Input. Please, type in your Weight!');
    } else if (gender == -1) {
        alert('Required Input. Please, select your Gender!');
    } else if (isNaN(age)) {
        alert('Required Input. Please, type in your Age!');
    } else if (smoke == -1) {
        alert('Required Input. Please, select if you Smoke or no!');
    } else if (alcohol == -1) {
        alert('Required Input. Please, select if you drink Alcohol or no!');
    } else {
    $.post(url, {
    gender: gender,
    smoke: smoke,
    alco: alcohol,
    age: age,
    height: height,
    weight: weight
    }, function(data, status) {
        console.log(data.target_weight);
        result.innerHTML = "Target Weight (lbs)" + "<h3>" + data.target_weight.toString() + "</h3>";
        console.log(status);
    });
    }

}