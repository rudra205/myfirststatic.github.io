
const express = require ('express')
app = express();
const port=8000;


app.use(express.static("C:/Users/Rudra Debadarsi Das/expencetrack/public"));




app.get('/', (req,res)=>{
  res.send('my name is rudra');
});
app.listen(port, ()=>{  
  console.log(`listen ing to the port ${port}` );
});

console.log(__dirname);