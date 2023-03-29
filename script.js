let startbtn = document.getElementById('start');
let stopbtn = document.getElementById('stop');
let resetbtn = document.getElementById('reset');
  
let hour = 00;
let minute = 00;
let second = 00;
let count = 00;
  
startbtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
});
  
stopbtn.addEventListener('click', function () {
    timer = false;
});
  
resetbtn.addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
});
  
function stopWatch() {
    if (timer) {
        count++;
  
        if (count == 100) {
            second++;
            count = 0;
        }
  
        if (second == 60) {
            minute++;
            second = 0;
        }
  
        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }
  
        let hrInt = hour;
        let minInt = minute;
        let secInt = second;
        let CountInt = count;
  
        if (hour < 10) {
            hrInt = "0" + hrInt;
        }
  
        if (minute < 10) {
            minInt = "0" + minInt;
        }
  
        if (second < 10) {
            secInt = "0" + secInt;
        }
  
        if (count < 10) {
            CountInt = "0" + CountInt;
        }
  
        document.getElementById('hr').innerHTML = hrInt;
        document.getElementById('min').innerHTML = minInt;
        document.getElementById('sec').innerHTML = secInt;
        document.getElementById('count').innerHTML = CountInt;
        setTimeout(stopWatch, 10);
    }
}