var count = 5
        function fn(){
            setInterval(function(){
                if(count>0)
                    console.log(count--)
                else
                    console.log('펑!')
                    return
            },1000)
            }
    function fnx(){
    setTimeout(()=>{ 
            clearInterval(stop1)   
            },1000)
        }