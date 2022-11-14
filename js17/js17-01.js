function fn() {

    let sec = 55;
    var min = 55;

    time = setInterval(() => {
        sec++
        if (sec > 59) {
            sec = 0;
            min++;
            if (min > 59) {
                min = 0;
            }
        }
        console.log(`${min}분${sec}초`)
    }, 1000)
}
function fnx() {
    setTimeout(() => {
        clearInterval(time)
    }, 1000);
}
