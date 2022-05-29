window.onload=function(){
    let text = document.getElementById("data");
    let sel = document.getElementById("selection");
    let azi = new Date();
    text.value = azi.getDate()+'-'+(azi.getMonth()+1)+'-'+azi.getFullYear();
    text.style.color = sel[0].value;
    let i=1;
    if(window.localStorage.getItem("culoare") != undefined){
        text.style.color = window.localStorage.getItem("culoare") ;
        window.localStorage.clear();
    }
    else {
        let interval = setInterval(()=>{
        text.style.color = sel[i].value;
        i++; 
        if(i==3) 
            i=0; 
        },3000);
        window.onkeydown = function(event){
            let a = event.key;
            if(a=='s'){
                clearInterval(interval);
                window.localStorage.setItem("culoare",text.style.color);
            }   
        }
    }
}