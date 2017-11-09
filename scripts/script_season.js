
/*
var telephone = prompt("Здравствуйте, введите номер телефона:","не указано");
var address_street = prompt("Улица","не указано");
var address_house = prompt("Номер дома:","не указано");
var address_flat = prompt("Квартира:","не указано");
var sum = +prompt("Сумма которую вы хотите вложить:","не указано");
var procent = +prompt("Процент под который вы хотите вложить деньги:","не указано");
var months = +prompt("На какой срок вы хотите положить свои деньги (кол-во месяцев):","не указано");
var deposit = (sum*procent)/100*months+sum;
var result = alert("Здравствуйте, на номер телефона "+telephone+",\n" + "На адрес: улица "+address_street+", дом " + address_house + ", квартира "+address_flat+"\n" + "Зарегистрирован счёт на сумму: " + sum + ", процент " + procent +",cрок "+ months +" месяцев" + "\n"+"После " + months + " месяцев вы сможете забрать вклад который = " + deposit +"$");
*/

var month = prompt("Введите месяц своего рождения: ").toLowerCase();
if ((month > 0 && month <= 12) || month == "январь" || month == "февраль" ||
 month == "март" || month == "апрель" || month == "май" ||
 month == "июнь" || month == "июль" || month == "август" ||
 month == "сентябрь" || month == "октябрь" || month == "ноябрь" || month == "декабрь"){
  switch (month){
    case "12":
    case "1":
    case "2":
    case "декабрь":
    case "январь":
    case "февраль":
      alert("Вы родились зимой");
      break;
    case "3":
    case "4":
    case "5":
    case "март":
    case "апрель":
    case "май":
      alert("Вы родились весной");
      break;
    case "6":
    case "7":
    case "8":
    case "июнь":
    case "июль":
    case "август":
      alert("Вы родились летом");
      break;
    case "9":
    case "10":
    case "11":
    case "сентябрь":
    case "октябрь":
    case "ноябрь":
      alert("Вы родились осенью");
      break;
    default:
    alert("Неправильный ввод");
  }
}else{
  alert("Неправильно");
}
