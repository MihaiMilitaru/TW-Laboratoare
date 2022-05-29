const express = require('express');
const path = require("path");
const app = express();
const hostname = '127.0.0.1';
const port = 3000;

app.use('/view',express.urlencoded({extended:true}));

let ob=[
    {nume: "a", culoare: "rosu", dimensiune: 3},
    {nume: "b", culoare: "verde", dimensiune: 1},
    {nume: "c", culoare: "albastru", dimensiune: 4},
    {nume: "d", culoare: "verde", dimensiune: 1},
    {nume: "e", culoare: "rosu", dimensiune: 5},
    {nume: "f", culoare: "albastru", dimensiune: 2},
    {nume: "g", culoare: "rosu", dimensiune: 1}
]

app.get("/", (req, res) => { 
    res.sendFile(path.join(__dirname,"p4.html"))
 })

app.post("/view",function(req,res){
    let color=req.body.culori;
    let numar=req.body.nr;
    let sum=0;
    for(let i=0;i<ob.length;i++){
        if(ob[i].culoare==color && ob[i].dimensiune>=numar){
            sum++;
        }

    }
    if(sum){
        res.send(sum.toString());
    }else{
        res.send("nu exista obiecte");
    }
    

});




app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});