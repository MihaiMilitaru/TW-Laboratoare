//Exercitiul 1

function functie(){
    let nume = document.getElementById("name");
    let parola = document.getElementById("password");
    let mail= document.getElementById("email");

    console.log(nume.value , parola.value , mail.value);
}

//Exercitiul 2

let font=1;
const para=document.querySelectorAll("p");

function maximise(){
    font += 0.2;
    Array.from(para).forEach(paragraf => {paragraf.style.fontSize = font + "em"})      

}
function minimise(){
    font-=0.2;
    Array.from(para).forEach(paragraf => {paragraf.style.fontSize = font + "em"}) 

}

//Exercitiul 3


function function_up(){
    let v=document.getElementById("dv");
    v.style.top = (parseInt(window.getComputedStyle(v).top) - 5) + 'px';
}

function function_left(){
    let v=document.getElementById("dv");
    v.style.left = (parseInt(window.getComputedStyle(v).left) - 5) + 'px';

}
function function_right(){
    let v=document.getElementById("dv");
    v.style.left = (parseInt(window.getComputedStyle(v).left) + 5) + 'px';
}

function function_down(){
    let v=document.getElementById("dv");
    v.style.top = (parseInt(window.getComputedStyle(v).top) + 5) + 'px';
}



//Exercitiul 4


let ls=["Mordekaiser", "Galio", "Jax", "Karthus", "Malphite", "Rengar", "Thresh", "Malphite", "Maokai", "Volibear"];


function randomise(){
    document.getElementById("empty_string").innerHTML="";
    let nr=Math.floor(Math.random()*ls.length-1);
    let newls=[];
    for(i=0;i<nr;i++){
        let r=Math.floor(Math.random()*nr);
        newls.push(ls[r]);
    }

    for(i=0;i<newls.length;i++){
        document.getElementById("empty_string").innerHTML+=newls[i];
        document.getElementById("empty_string").innerHTML+=", ";
    }
    
    
    
}


