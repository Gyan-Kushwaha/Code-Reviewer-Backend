const express=require('express');
const aiRoutes=require('./routes/ai.routes');
const cors=require('cors')

const app=express(); 

app.use(cors({ origin: "https://code-reviewer-frontend-five.vercel.app" }));

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello world'); 
})


app.use('/ai',aiRoutes)



module.exports=app;