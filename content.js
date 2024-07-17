let btn_insert = document.getElementById("insert_coin_button");
let btn_buy = document.getElementById("buy-voucher");

let amount = document.getElementById("tamount");
let time = document.getElementById("progress-msg");

let userinput, price;

//sessionStorage.setItem('Repeats', userinput);
//sessionStorage.getItem('Repeats')
// sessionStorage.clear();
// console.log(sessionStorage.getItem('Repeats'));
// console.log('no more data!');

if(sessionStorage.getItem('Repeats')){
  setTimeout(() => {
    setTimeout(inserts, 5000); // 5 seconds delay
    setInterval(test_value, 3000); // 3 seconds per delay per check
    setInterval(check_time, 900); // 9 milisenconds per delay per check
  }, 5000); // delay 5 seconds
}
else{
  setTimeout(() => {
    setTimeout(inserts, 5000); // 5 seconds delay
    setInterval(test_value, 3000); // 3 seconds per delay per check
    setInterval(check_time, 900); // 9 milisenconds per delay per check
  }, 20000); // delay 20 seconds
  
}

function inserts() {
  btn_insert.click();
}

function test_value() {
if (amount.innerHTML == "10") {
  btn_buy.click();
  sessionStorage.setItem('Repeats', 1);
}
}

function check_time(){
if(time.innerHTML == "Waiting for 30 seconds"){
  btn_buy.click();
}
}





