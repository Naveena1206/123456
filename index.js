const express = require("express");
// initialisation
const app =express();

app.use(express.json());

const port = 8081;

const toDolist = ["naveena","munni","chinni"];

// /http://localhost:8081/todos

app.get("/todos",(req,res) => {
    res.status(200).send(toDolist);
})

app.post("/todos",(req,res)=>{
    let newToDoItem = req.body.item;
    toDolist.push(newToDoItem);
    res.status(201).send({
        message:"Task was added succesfully"
    })
})

app.delete("/todos",(req,res)=>{
    const itemToDelete = req.body.item;

    toDolist.find((elem,i)=>{
        if(elem==itemToDelete){
            toDolist.splice(i,1)
        }
    })
    res.status(204).send({
        message:"Deleted the item"
    })
})

app.all("/todos",(req,res)=>{
    res.status(501).send()
})

app.all("*",(req,res)=>{
    res.status(404).send();
})


app.listen(port,() =>{
    console.log(`ExpressJs Server is up and running succesfully on port ${port}`)
})

