const express = require('express');
const app = express();
const port = 3000;


let persoane=[{nume:"Ion", sex:"m", varsta:3},
{nume:"Oana", sex:"f", varsta:23},
{nume:"Daria",sex:"f", varsta:10}, 
{nume:"Mihai", sex:"m", varsta:19}, 
{nume:"Gabriel", sex:"m", varsta:22}, 
{nume:"Simona", sex:"f", varsta:11}, 
{nume:"Bogdan", sex:"m", varsta:28}];

app.use(express.static("html"));


app.get("/view",function(req,res){
    let nume=req.query.name;
    let ok=0;
    let a = ""
    for(let i=0;i<persoane.length;i++){
        if(nume==persoane[i].nume){
            /*if (persoane[i].sex=="m" && persoane[i].varsta>=18){
                res.send("baiat major");
                ok=1;
            }

            if (persoane[i].sex=="f" && persoane[i].varsta>=18){
                res.send("fata major");
                ok=1;
            }

            if (persoane[i].sex=="m" && persoane[i].varsta<18){
                res.send("baiat minor");
                ok=1;
            }

            if (persoane[i].sex=="f" && persoane[i].varsta<18){
                res.send("fata minor");
                ok=1;
            }*/ 
            a += ((persoane[i].sex == "m") ? "baiat,":"fata,")+((persoane[i].varsta < 18) ? "este minor":"nu este minor")
            res.send(a)
        }
       
    }
    if(ok==0){
        res.send("nu exista persoana cautata");
    }

});




app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

