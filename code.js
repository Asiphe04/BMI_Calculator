const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");

function calculateBMI() {
  const heightValue = document.getElementById("height").value / 100;
  const weightValue = document.getElementById("weight").value;

  const bmiValue = weightValue / (heightValue * heightValue ).toFixed(1) ;

  bmiInputEl.value = bmiValue.toFixed(1) ;

  if (bmiValue.toFixed(1) <= 18.4) {
    weightConditionEl.innerText = "Under weight 😟";
  } else if (bmiValue.toFixed(1) >= 18.5 && bmiValue.toFixed(1) <= 24.9) {
    weightConditionEl.innerText = "Normal weight 😁👍";
  } else if (bmiValue.toFixed(1) >= 25.0 && bmiValue.toFixed(1) <= 39.9) {
    weightConditionEl.innerText = "Overweight 😐";
  } else if (bmiValue.toFixed(1) >= 40.0) {
    weightConditionEl.innerText = "Obesity 😨";
  }
}
 
btnEl.addEventListener("click", calculateBMI);
