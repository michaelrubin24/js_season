
var message = "Первое число делится на второе с остачей ";
var err = "Неправильный ввод";
var number_first = +prompt ("Делится ли первое число без остачи на второе." + "\n" + "Введите первое число:" ,"4");
if ( isNaN(number_first) || number_first ==""){
  alert(err);
}else{
  var number_second = +prompt ("Введите второе число:" ,"4");
  if ( isNaN(number_second) || number_second =="" || number_second > number_first){
    alert(err);
  }else{
      var result = number_first % number_second;
      alert(message + result);
       }
      }
