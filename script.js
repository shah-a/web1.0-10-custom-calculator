const calctypeInput = document.querySelector("#calctype-input");

function updateCalctype() {
  const calctypeOutput = document.querySelector("#calctype-output");
  calctypeOutput.innerHTML = `${calctypeInput.value}`;
}

calctypeInput.addEventListener("input", updateCalctype);

const siblings = [];
