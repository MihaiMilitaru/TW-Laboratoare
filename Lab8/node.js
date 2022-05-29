// const el=document.getElementById("div1");

// el.addEventListener("click", showValue);

// function showValue(e){
//     console.log(e.clientX);
//     console.log(e.clientY);
// }


// Exercitiul cu mouse-ul.......................................................................................

function numarRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
  
function culoareRandom(){
    return "rgb(" + numarRandom(0, 255) + ", " + numarRandom(0, 255) + ", " + numarRandom(0, 255) + ")";
}
   
window.onload=function(){
    var nrclick=0;
    window.onclick=function(event){

       var cx=event.clientX; //pozitia mouse-ului
       var cy=event.clientY;

       var but=document.createElement("button"); //creare buton
       document.body.appendChild(but);
               
       but.innerHTML=++nrclick;   //stilizare si pozitionare
       but.style.backgroundColor=culoareRandom();
       but.style.position="absolute";
       but.style.left=cx + "px";
       but.style.top=cy + "px";

       setTimeout(function(){document.body.removeChild(but);},5000); // stergere dupa 4s
                   
    }

}     

// Exercitiul cu div.uri si culoarile care revin..........................................................

// for(let i=0;i<9;i++){
//     let div1=document.createElement("div");
//     div1.innerText=i;
//     div1.style.backgroundColor="lightblue";
//     div1.style.border="1px solid black";
//     div1.style.width="30px";
//     div1.style.height="20px";
//     const body=document.getElementsByTagName("body")[0];
//     body.append(div1)
// }
// const di=document.getElementsByTagName("div");
// onkeydown=function(event){
//     var a = event.key;
//     for(let i= 0;i<=9;++i){
//         if(a==i)
//         di[i].style.backgroundColor=culoareRandom();
//     }
// };
// onkeyup=function(event){
//     var a = event.key;
//     for(let i= 0;i<=9;++i){
//         if(a==i)
//          di[i].style.backgroundColor="lightblue";
//     }
// };



// function numarRandom(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
//     }
// function culoareRandom(){
//     return "rgb(" + numarRandom(0, 255) + ", " + numarRandom(0, 255) + ", " + numarRandom(0, 255) + ")";
//     }
        