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

// const orderPieces = 4;

// const credits = 23580;
// const pricePerDroid = 3000;
// const CANCELED_BY_USER = "Отменено пользователем!";
// const ACCESS_DENIED = "Недостаточно средств на счету!";

// let totalPrice; // Write code on this line
// let balanceCredit; // Write code on this line
// let message;

// // Write code under this line

// if (orderPieces === null) {
//   message = CANCELED_BY_USER;
// } else {
//   totalPrice = orderPieces * pricePerDroid;
// }

// if (totalPrice > credits) {
//   message = ACCESS_DENIED;
// } else if (totalPrice <= credits) {
//   message = `Вы купили ${orderPieces} дроидов, на счету осталось ${
//     credits - totalPrice
//   } кредитов`;
// }

// console.log(totalPrice);
// console.log(message);
