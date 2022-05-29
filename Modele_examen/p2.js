window.onload=function(){
    let n=Math.floor(Math.random() * 10) + 10;
    for(let i=0;i<n;i++){
        let par=document.createElement("p");
        par.innerText="Eu sunt paragraful "+i;
        par.className="stil";
        par.addEventListener("click", function(event){
    
            event.stopPropagation();

            function random_rgba() {
                var o = Math.round, r = Math.random, s = 255;
                return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
            }
            
            var color = random_rgba();
            par.style.color=color;

            
        })
        document.body.appendChild(par);
    }
 let b =document.getElementsByTagName("body")[0]
 let prs=document.getElementsByTagName("p");
   b.onclick=()=>{
        
        for(let i=0;i<prs.length;i++){
            prs[i].style.color="red";
        }
    }

    
}

