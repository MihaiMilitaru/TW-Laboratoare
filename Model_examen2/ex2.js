window.onload=()=>{
    let d=new Date();
    let k=d.getMinutes();
    if(k>10){
        n=k;
    }else{
        n=10;
    }
    for(let i=0;i<n;i++){
        let par=document.createElement("p");
        par.innerHTML="Mihai-Alexandru";
        let r=Math.floor(Math.random()*5)+1;
        if(r==1){
            par.className="c1";
        }
        if(r==2){
            par.className="c2";
        }
        if(r==3){
            par.className="c3";
        }
        if(r==4){
            par.className="c4";
        }
        if(r==5){
            par.className="c5";
        }

        document.body.appendChild(par);

        

        par.addEventListener("click", function(event){
            event.stopPropagation();
            let v=par.className;
            let arr=document.getElementsByClassName(v);
            console.log(arr);
            for(let i=0;i<arr.length;i++){
                arr[i].remove();
                i--;
            }
        })

        
    }

    

}

window.addEventListener("click", function(event){
    let p=event.clientY;
    alert(p);

})