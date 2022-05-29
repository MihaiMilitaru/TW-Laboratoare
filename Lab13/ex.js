window.onload=()=>{
    const inp = document.createElement("input");
    inp.type = "range";
    inp.min = 4;
    inp.max = 10;
    inp.value = Math.floor((parseInt(inp.min) + parseInt(inp.max))/2);
    document.body.appendChild(inp);
    const div1 = document.createElement("div");
    div1.id ="parinte";
    div1.style.position ="relative";
    document.body.appendChild(div1);
    let nr_copii=0; 
    let c=localStorage.getItem("Numardiv");
    if(c){
        inp.value=c;
    }
    inp.addEventListener('input', function () {
        let y = parseInt(window.localStorage.getItem("Numardiv"))
        let precedent = document.getElementsByClassName("copil")
        if(precedent.length>0)
        for( let i = 0;i <precedent.length; ++i){
            div1.removeChild(precedent[i])
            i--;
        }
        
        window.localStorage.setItem("Numardiv",inp.value);
        
        y = parseInt(inp.value);
        // window.localStorage.setItem("Numardiv",inp.value);
       for( let i = 1;i <= y; ++i){
           const copil = document.createElement('div'); 
           copil.className = "copil";
           copil.style.position ="relative";
           copil.style.top = Math.floor(Math.random() * Math.floor(parseInt(getComputedStyle(div1).height)/2)) + "px";
           copil.style.left = Math.floor(Math.random() * Math.floor(parseInt(getComputedStyle(div1).width)/2)) + "px";
         
           div1.appendChild(copil);
       }     
       
       div1.addEventListener("click", function(){
           if(nr_copii){
               let prr=document.createElement("p");
               prr.innerText=nr_copii;
               document.body.appendChild(prr);
           }

       })
       const copil = div1.childNodes;
       for(let i=0;i<copil.length;++i)
       copil[i].addEventListener("click",function cop(event){
           event.stopPropagation();
           nr_copii++;
               copil[i].className="activ";
               onkeydown=function(event){
                    let a = event.key; 
                    
                    if(a == "ArrowUp"){
                        copil[i].style.top = (parseInt(window.getComputedStyle(copil[i]).top) - 3) + 'px';
                        event.stopPropagation();
                        copil[i].className="copil";
                        
                    }   
                        

                    if(a  == "ArrowLeft"){
                        copil[i].style.left = (parseInt(window.getComputedStyle(copil[i]).left) - 3) + 'px';
                        event.stopPropagation();
                        copil[i].className="copil";
                    }
                            
                        
                    if(a  == "ArrowRight"){
                        copil[i].style.left = (parseInt(window.getComputedStyle(copil[i]).left) + 3) + 'px';
                        event.stopPropagation();
                        copil[i].classList.remove("activ");
                        copil[i].className="copil";
                    }     
                    
                    if(a  == "ArrowDown"){
                        copil[i].style.top = (parseInt(window.getComputedStyle(copil[i]).top) + 3) + 'px';
                        event.stopPropagation();
                        copil[i].classList.remove("activ");
                        copil[i].className="copil";
                    }
        
                }

           }, false)
    }, false);

    
}

