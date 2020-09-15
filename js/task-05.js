let delivery = prompt("Куда доставить?");
let price = 0;
delivery = delivery.toLowerCase();

if (delivery === null) {
  console.log("Отменено пользователем!");
} else {
  switch (delivery) {
    case "китай":
      price = 100;
      break;

    case "чили":
      price = 250;
      break;

    case "австралия":
      price = 170;
      break;

    case "индия":
      price = 80;
      break;

    case "ямайка":
      price = 120;
      break;

    default:
      alert("В вашей стране доставка не доступна");
  }

  console.log(
    `Доставка в ${
      delivery[0].toLocaleUpperCase() + delivery.slice(1)
    } будет стоить ${price} кредитов`
  );
}

// const countryName = "КитаЙ";

// const CANCELED_BY_USER = "Отменено пользователем!";
// const NO_DELIVERY = "В выбранную страну доставка недоступна.";
// const CHINA = "Китай";
// const AUSTRALIA = "Австралия";
// const INDIA = "Индия";
// const JAMAICA = "Ямайка";
// let message;
// let price = 0;
// let country;
// if (countryName === null) {
//   message = CANCELED_BY_USER;
// } else {
//   country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();
//   console.log(country); // Write code on this line
//   switch (country) {
//     // Write code under this line
//     case CHINA:
//       price = 100;
//       break;

//     case AUSTRALIA:
//       price = 170;
//       break;

//     case INDIA:
//       price = 80;
//       break;

//     case JAMAICA:
//       price = 120;
//       break;

//     default:
//       message = NO_DELIVERY;
//   }
// }
// if (price > 0) {
//   // Write code on this line
//   message = `Доставка в ${country} будет стоить ${price} кредитов`;
// }

// console.log(message);
