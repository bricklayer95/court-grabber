const express = require('express');
  
const app = express();
const PORT = 3000;
  
app.listen(PORT, (error) =>{
    if(!error){
        console.log("Server is running on port", PORT);
    }
    else {
        console.log("Error occurred, server can't start", error);
    }
});