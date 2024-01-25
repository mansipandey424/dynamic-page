import express from "express"
import path from 'path'
import { fileURLToPath } from 'url'; 
import bodyParser from 'body-parser';

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.post('/form', function(req, res){
var x = req.body.fname
var y = req.body.lname
var z = req.body.age
var n = req.body.contact
var m = req.body.email
var p = req.body.password

  console.log(x, y, z, n, m, p)
    res.render("form.ejs", {"fname":x, "lname":y, "age":z, "contact":n, "email":m, "password":p});
  });

app.get('/form', (req, res)=> {
    console.log(__dirname)
      res.sendFile(path.join(__dirname, 'views/form.html'))
     
    });

    app.get('/form', (req, res)=> {
      // console.log(__dirname)
      
  });    
      

    app.listen(4080, function(req,res){
        console.log("server start")
        
    });
