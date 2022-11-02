let num=0
        function updn(x){
            console.log(x)
            num=num+x
            // if(x>0){x=x}else{x=-x} 다른 예2
            x>0?x=x:x=-x // 음수값을 유지하여 버튼을 만들기 때문에 입력값을 조절할 필요가 있다.
            document.write(`<div>${num}</div><button onclick="updn(${x})">증가</button>            
            <button onclick="updn(${-x})">감소</button>`)
                    document.close()
        }

    /* 다른 예1 */    
    //     let num=0
    //     function updn(x){
    //         console.log(x)
    //         num=num+x
    //         if(x>0){   
    //         document.write(`<div>${num}</div><button onclick="updn(${x})">증가</button>            
    // <button onclick="updn(${-x})">감소</button>`)}
    // else{
    //     document.write(`<div>${num}</div><button onclick="updn(${-x})">증가</button>            
    // <button onclick="updn(${x})">감소</button>`)
    // }
    //         document.close()
    //     }     