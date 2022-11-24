
var sec = 55;
var min = 0;
function fn() {
    time = setInterval(() => {
       sec++; //1초마다 증가
       set = min%60;
       

        document.write(`${min}분${sec}초`)
    }, 1000)
    return
}

