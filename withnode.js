const http = require("http");

const port= 8081;

const toDolist =["naveena","munni","chinni"];

http.createServer((req,res)=> {
    // res.writeHead(200,{"content-type":"text/html"});
    // res.write("<h1>hello naveena 123</h1>");

    const {method,url} = req;
    // console.log(method,url)
    if (url=="/todos"){
        if(method==="GET"){

            res.writeHead(200);
            res.write(toDolist.toString())

        }else if(method==="POST"){

            let body = "";
            req.on('error',(err)=>{
                console.error(err)
            }).on('data',(chunk)=>{
                body +=chunk;
                console.log(chunk);
            }).on('end',()=>{
                body=JSON.parse(body)
                console.log("body:", body);
                let newtoDo = toDolist;
                newtoDo.push(body.item)
                
                
            })

            

        }
        
        else {
            res.writeHead(501);
        }
    }else if (url==="/"){

    }

    res.end();
    
    
})
    
.listen(port,() =>{
    console.log(`NodeJs Server is up and running succesfully on port ${port}`)

})