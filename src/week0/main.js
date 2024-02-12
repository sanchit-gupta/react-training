var currentdate = new Date();

var hrs = currentdate. getHours();
var greet;
if (hrs < 12)
  greet = 'Good Morning';
else if (hrs >= 12 && hrs <= 17)
  greet = 'Good Afternoon';
else if (hrs >= 17 && hrs <= 24)
  greet = 'Good Evening';

let greetContainer = document.querySelector('.greet');
console.log(greetContainer)
document.querySelector('.greet').append(greet);


var datetime = currentdate.toLocaleString();
console.log(datetime)




let timeContainer = document.querySelector('.time');
console.log(timeContainer)
document.querySelector('.time').append(datetime);