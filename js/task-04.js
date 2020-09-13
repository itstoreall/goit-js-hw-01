let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

const quantity = prompt("Сколько дроидов желаете?");

if (quantity === null) {
  console.log("Отменено пользователем!");
} else {
  totalPrice = pricePerDroid * quantity;
}
console.log(totalPrice);

if (totalPrice > credits) {
  console.log("Недостаточно средств на счету!");
} else {
  credits = credits - totalPrice;
}

console.log(
  `Вы купили ${quantity} дроидов, на счету осталось ${credits} кредитов.`
);
