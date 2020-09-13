let input;
let total = 0;

for (input = 0; input !== null; input = prompt("Ввод")) {
  input = Number(input);

  if (input >= 0) {
    total += input;
  } else {
    alert("Было введено не число, попробуйте еще раз");
  }

  console.log(total);
}

console.log(alert(`Общая сумма чисел равна ${total}`));
