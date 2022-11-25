var count = 2
        function fn(){
            stop1 = setInterval(function(){
                if(count>0)
                    console.log(count--)
                else
                setTimeout(()=>{ 
                    if(count<1)
                       console.log('펑')
                        clearInterval(stop1)   
                        },1000)
                    return
            },1000)
            }
    
        