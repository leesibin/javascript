let list = '';
        console.log(typeof(list));
        list +='<ul>';
        list +='<li>Hellow 반갑다는 뜻이야!</li>';
        list +='<li>Javascript로 작성되었어.</li>';
        list +='</ul>';
        list +='<h2>&& and</h2>';    
        list +='<table class="a">';
        list +='<tr><th>false</th><th>false</th><th>false</th></tr>';
        list +='<tr><th>ture</th><th>false</th><th>false</th></tr>';
        list +='<tr><th>false<t/h><th>true</th><th>false</th></tr>';
        list +='<tr><th>ture</th><th>true</h><th>true</th></tr>';
        list +='</table>';
        list +='<table class="b">'
        list +='<h2> || or</h2>'
        list +='<tr><th>false</th><th>false</th><th>false</th></tr>';
        list +='<tr><th>ture</th><th>false</th><th>true</th></tr>';
        list +='<tr><th>false</th><th>true</th><th>true</th></tr>';
        list +='<tr><th>ture</th><th>true</th><th>true<t/h></tr>';
        list +='</table>'  
        document.write(list);