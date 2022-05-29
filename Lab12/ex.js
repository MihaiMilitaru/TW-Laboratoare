let v=2000;
window.onload = ()=>{ 
    if(window.localStorage.getItem("cifra")!=null){
        let i = parseInt(window.localStorage.getItem("cifra"));
        const p = document.createElement('p');
        p.innerText = 'Ultima valoare introdusa a fost '+i+' si au fost sterse paragrafele ';
        for(let z = i;z<=10;z+=i)
            p.innerText += z +" ";
        document.body.appendChild(p);
    }
}
function validare(){
    let text=document.getElementById("numere").value;
   
    if(text.match(/\b([1-9]|10)\b/)){
        window.localStorage.setItem("cifra",text);
        onkeydown=function(event){
            let a=event.key;
            if(a==='Enter'){
                let nr=parseInt(text);
                let m=nr;
                // while(nr<=10){
                //     console.log(document.getElementById(nr));
                //     setTimeout(function(){
                //         document.getElementById(nr).remove();
                //     }, v);
                    
                //     nr+=m;
                //     v+=2000;
                // }

                setInterval(function(){
                    if(nr<=10){
                        document.getElementById(nr).remove();
                        nr+=m;
                    }
                    
                }, 2000)
            }
    
        }
    }else{
        alert("input invalid");
    }
   
}

