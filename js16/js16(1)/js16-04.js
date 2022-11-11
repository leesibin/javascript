    setTimeout(()=>{
            alert('펑!')
            },6001)
    
        function fn(){              
            let count = 6;
     stop1 =  setInterval(()=>{
            --count
            console.log(`${count}번째`)
        },1000)
    }
    function fnx(){
    setTimeout(()=>{ 
            clearInterval(stop1)   
            },1000)
        }