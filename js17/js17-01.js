function fn(){
    
    let count = 0;
   time = setInterval(()=>{
        count ++;
        console.log(`${count}`)
    },1000)
}
function fnx(){
    setTimeout(() => {
        clearInterval(time)
    },1000);
}
