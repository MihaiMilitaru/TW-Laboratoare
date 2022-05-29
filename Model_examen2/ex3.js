window.onload=()=>{
 
    let inp =document.getElementById("data");  
    
    let v=new Date();
    inp.setAttribute('value', v);
    let id=0;
    let s=document.getElementById("sel");
    if(window.localStorage.getItem("cul")!= undefined){
        inp.style.color = window.localStorage.getItem("cul")
        s.value = window.localStorage.getItem("cul")
    }
    let x=setInterval(function(){
        let c=id%3;
        if(c==0){
            inp.style.color="red";
            s.value='red';
        }
        if(c==1){
            inp.style.color="green";
            s.value='green';
        }
        if(c==2){
            inp.style.color="blue";
            s.value='blue';
        }
        id++;

    },3000)

    onkeydown=function(event){
        let a=event.key;
        if(a=='s'){
            clearInterval(x);
            window.localStorage.setItem("cul",inp.style.color)
        }

    }

}