
var sec = 55;
var min = 0;
function fn() {
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
    return
}

