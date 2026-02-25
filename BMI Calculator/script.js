const btn = document.querySelector("#calculate");


btn.addEventListener("click", function () {

    const height = document.querySelector("#height").value;
    const weight = document.querySelector("#weight").value;
    const result = document.querySelector("#result");
    const comment = document.querySelector("#comment");
    let bmi = 0;

    // calculate the BMI
    if (height === "" || height < 0) {
        alert(`Please give a valid height ${height}`);
    }
    else if (weight === "" || weight < 0) {
        alert(`Please give a valid weight ${weight}`);
    }
    else {
        bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `${bmi}`;
    }

    // print the status like Underweight, Normal weight, Overweight & Obese
    if (bmi < 18.5) {
        comment.innerHTML = "You are underweight. Try improving your nutrition.";
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        comment.innerHTML = "You are in the healthy range. Keep it up!";
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        comment.innerHTML = "You are overweight. Consider regular exercise.";
    }
    else {
        comment.innerHTML = "You are in the obese range. Focus on a healthier lifestyle.";
    }
})


const resetBtn = document.querySelector("#reset");

resetBtn.addEventListener("click", function() {
    const height = document.querySelector("#height");
    const weight = document.querySelector("#weight");
    const result = document.querySelector("#result");
    const comment = document.querySelector("#comment");

    height.value = "";
    weight.value = "";
    result.innerHTML="00.00";
    comment.innerHTML="Enter values to see your result 🙂";
})