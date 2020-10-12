const calctypeInput = document.querySelector("#calctype-input");
const calcOutput = document.querySelector("#calc-output");
const ageInputs = Array.from(document.getElementsByClassName("age-field"));

function updateCalctype() {
  const calctypeOutput = document.querySelector("#calctype-output");
  calctypeOutput.innerHTML = `${calctypeInput.value}`;
  calculate();
}

function calculate() {
  const calctype = calctypeInput.value;

  if (calctype === "average") {
    var average = 0;

    ageInputs.forEach(function (age) {
      average += parseFloat(age.value);
    })
  
    average /= ageInputs.length;

    calcOutput.innerHTML = `${average.toFixed(2)} years`;
  } else if (calctype === "combined") {
    var combined = 0;

    ageInputs.forEach(function (age) {
      combined += parseFloat(age.value);
    })
  
    calcOutput.innerHTML = `${combined.toFixed(2)} years`;
  }
}

calctypeInput.addEventListener("input", updateCalctype);

ageInputs.forEach(function (inputField) {
  inputField.addEventListener("input", calculate);
});
