const express=require('express')
const app=express()
const port=80

const myObject={"message":"My name is Matthew Martinez,","timestamp":""};

//Send object information in response to '/' PATH "get" request.
app.get('/',(req,res)=>{
    myObject["timestamp"]=Date.now();

    //Stringifying object before writing it out to remove "pretty print" header.
    const jsonString=JSON.stringify(myObject);

    res.send(jsonString)
})

//Have app listen on port 3000
app.listen(port,()=>{
    console.log(`App is listening on ${port}`)
})