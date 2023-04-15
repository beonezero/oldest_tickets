let numberOne = document.querySelector(".number-one");
let button = document.querySelector(".button");
let result = document.querySelector(".result");

button.addEventListener("click", function () {
  let price = 25;
  let age = numberOne.value;

  if (age < 8) {
    price = 0;
  } else if (age < 20) {
    price = price * 0.8;
  } else if (age > 20) {
    price = price;
  }

  result.innerText = `Цена билета равна ${price}`;
});
