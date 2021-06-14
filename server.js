const express = require('express')
const app = express()
var server_port = process.env.YOUR_PORT || process.env.PORT || 3000;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
app.get('/', (req, res) => {
  res.send('Hello World')
})
const circularReplacer = () => {
  
    // Creating new WeakSet to keep 
    // track of previously seen objects
    const seen = new WeakSet();
      
    return (key, value) => {
  
        // If type of value is an 
        // object or value is null
        if (typeof(value) === "object" 
                   && value !== null) {
          
        // If it has been seen before
        if (seen.has(value)) {
                 return;
             }
               
             // Add current value to the set
             seen.add(value);
       }
         
       // return the value
       return value;
   };
};

app.post('/scb/payment/confirm', (req, res) => {
    //console.log(JSON.stringify(
    // req, circularReplacer()))
    //res.send(res)
    console.log(req.body)
    res.send(req.body)
  })

app.listen(server_port , () => {
  console.log('Listening on port %d', server_port);
})