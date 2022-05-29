window.onload=()=>{
    let y=window.localStorage.getItem("ulist");
        if(y!= undefined){
            let l=document.getElementsByTagName("ul")[0];
            l.innerHTML = y;  
        }
    let x=setInterval(function(){
        let b=document.getElementById("box");
   
        if(b.checked!=false){
            clearInterval(x);
            window.localStorage.setItem("ulist",document.getElementsByTagName("ul")[0].innerHTML);   
        }
        else{
            let first=document.body.getElementsByTagName("li")[0];
            let list=document.body.getElementsByTagName("ul")[0];
            let last=first;
            list.removeChild(first);
            list.appendChild(last);
        }
        
        
    }, 3000)

    
}
