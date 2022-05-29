const express=require('express');
const app=express();

app.use('/view',express.urlencoded({extended:true}));
app.use('/add',express.urlencoded({extended:true}));

orase=[
	{
		nume:"Madrid",
		populatie:14000,
		capitala:true
	},
	{
		nume:"Anvers",
		populatie:7000,
		capitala:false
	},
	{
		nume:"Berlin",
		populatie:19000,
		capitala:true
	},
	{
		nume:"Haga",
		populatie:5000,
		capitala:false
	},
	{
		nume:"Sofia",
		populatie:8000,
		capitala:true
	},
	{
		nume:"Praga",
		populatie:12000,
		capitala:false
	},
	{
		nume:"Stockholm",
		populatie:20000,
		capitala:true
	}
]

app.get("/index2.html", function(req,res){

	res.sendFile(__dirname+ "/index2.html");

});

app.post("/view",function(req,res){

    let arr = [];
	for(let oras of orase) {
		if(req.body.tip == 'mic') {
			if(oras.populatie < 10000) {
				if(req.body.capitala == 'nu' && oras.capitala == false)
					arr.push(oras.nume);
				else if(req.body.capitala == 'da' && oras.capitala == true)
					arr.push(oras.nume); 
			}
		}
		else {
			if(oras.populatie >= 10000) {
				if(req.body.capitala == 'nu' && oras.capitala == false)
					arr.push(oras.nume);
				else if(req.body.capitala == 'da' && oras.capitala == true)
					arr.push(oras.nume); 
			}
		}		
	}
	res.send(arr);
});


app.get("/index3.html", function(req,res){

	res.sendFile(__dirname+ "/index3.html");

});
app.post("/add",function(req,res){
    let oras_var = req.body.oras;
    let populatie_var = req.body.populatie;
    let capitala_var = req.body.capitala;
    let oras;
    if(capitala_var=="da"){
        orase.push({nume: oras_var, populatie: populatie_var, capitala: true })
        oras = {nume: oras_var, populatie: populatie_var, capitala: true }
    }
    else{
        orase.push({nume: oras_var, populatie: populatie_var, capitala: false})
        oras = {nume: oras_var, populatie: populatie_var, capitala: false }
    }
    res.send(oras);
});

app.get("/ex2.html", function(req,res){
    res.sendFile(__dirname+ "/ex2.html");
});
app.listen(7000, function(){console.log("Server on");});

