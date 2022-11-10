     let count = 6;
    console.log(run)
    let run =setInterval(()=>{
        --count
        console.log(`${count}번째`)
    },1000)


    setTimeout(()=>{ 
        clearInterval(stop) 
        alert('펑!')   
        },6000)
    