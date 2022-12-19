document.addEventListener("DOMContentLoaded",()=>{
    const button1 = document.getElementById('btn-wo')
    const button2 = document.getElementById('btn-woo')
    const text1 = document.getElementById('title-op')
    const text2 = document.getElementById('text2')
    const text3 = document.getElementById('text3')
    let textarea1 = text1.value
    let textarea2 = text2.value
    let textarea3 = text3.value
    
    //불러오기
    function localLoad() {
        let mem = localStorage.getItem('test_box')
        return JSON.parse(mem) ?? []
    }
    //저장하기
    function localSave(test_obj) {
        let mem = JSON.stringify(test_obj)
        localStorage.setItem('test_box', mem)
    }
    //등록버튼
    button1.addEventListener('click',(a)=>{
        //유효성검사
        if(text1.value.length<1){
            window.confirm('입력하세요.')
        }else{
            let test_box=[];
            let watch = new Date
            let test_obj={
                id: test_box.length+1,
                title: textarea1,
                textmain: textarea2,
                text: textarea3,  
                date : watch,
            }
            test_box.push(test_obj)
            localSave(test_obj)
        alert('등록되었습니다.')
        console.log(test_box)
        }
    })
    //게시판 목록
    button2.addEventListener('click',()=>{
        window.location.href =
        'http://127.0.0.1:5500/UI%EA%B5%AC%ED%98%84_%EC%9D%B4%EC%8B%9C%EB%B9%88.html/noticeboard.html'
    })
   
})