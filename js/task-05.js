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
