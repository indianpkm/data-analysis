import express from 'express';
const app=express();
import dotenv from 'dotenv'
import Connection from './db/conn.js';
import newData from './modal/jsonModel.js';
import cors from 'cors'
import fs from 'fs'
dotenv.config()


const port=process.env.PORT || 5000

Connection()

app.use(cors())
  
  app.get('/test',(req,res)=>{
    fs.readFile('./data/jsondata.json','utf-8',async(err,data)=>{
    if(err){
      console.log(err)
      return
    }
    const dataArray = JSON.parse(data.toString());

    const jsonData=dataArray.map(obj=>({
      sector:obj.sector,
      relevance:obj.relevance,
      intensity:obj.intensity,
      likelihood:obj.likelihood,
      end_year:obj.end_year,
      country:obj.country,
      region:obj.region,
      topic:obj.topic,
      source:obj.source,

      insight:obj.insight,
      url:obj.url,
      start_year:obj.start_year,
      impact:obj.impact,
      added:obj.added,
      published:obj.published,
      pestle:obj.pestle,
      title:obj.title,
    }))

    let unique=[]

    for (let i=0;i<jsonData.length;i++){
      // if(!unique.includes(jsonData[i].source)){
      //   unique.push(jsonData[i].source)

      // }
      if(jsonData[i].country=='China'){
       unique.push(jsonData[i].region) 
      }
    }

    // for upload data in mongodb cloud
    // try{
    //     await newData.insertMany(jsonData)
    //   console.log(dataArray.length + ' data successfully')
    // }catch(err){
    //   res.send(err)
    //   console.log(err)
    // }

     res.send(unique.sort());


  });
})


app.get('/getdata',async(req,res)=>{
  try{
    const data=await newData.find();
    res.status(200).json(data)
    console.log('data send from server')
    
  }catch(err){
    console.log(err)
    res.status(500).json({message:'server error'})
  }
})

app.listen(port,()=>{
    console.log(`server start at ${port}`)
})