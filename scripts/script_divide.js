
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

var number_first = +prompt ("Делится ли первое число без остачи на второе." + "\n" + "Введите первое число:" ,"4");
if ( isNaN(number_first) || number_first =="" ){
  alert("Введите число!");
}else{
  var number_second = +prompt ("Введите второе число:" ,"4");
  if ( isNaN(number_second) || number_second =="" ){
    alert("Введите число!");
  }else{
      if (number_first % number_second == 0){
        alert("Первое число делится на второе без остачи,");
      }else{
        alert("Первое число делится на второе c остачей, остаток " + number_first % number_second );
            }
      }

    }
