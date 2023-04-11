import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import '../chart/pestle.css'

const Pestle = () => {
  const {jsonData}=useSelector((state)=>state.Data)

  let count={}
  for(let i=0;i<jsonData.length;i++){
    const Pestle = jsonData[i].pestle;
    if(Pestle in count){
      count[Pestle]++
    }else{
      count[Pestle]=1
    }
  }
  
const sortedCount = Object.entries(count).sort((a, b) => a[1] - b[1]);
const sortedCountJson = Object.fromEntries(sortedCount);
delete sortedCountJson['']
const sortedKeys = Object.keys(sortedCountJson);
const sortedValues = Object.values(sortedCountJson);
sortedKeys.reverse()
sortedValues.reverse()
// console.log(count)
// console.log(sortedCountJson)


const [options, setOptions] = useState({

});

  return (
    <div className="pestle" style={{margin:'0',padding:0}}>
      <Chart options={{
         labels: sortedKeys,
  title: {
    text: "Pestle",
    offsetY: 10,
    offsetX:230,
    style: {
      fontSize: "25px",
      fontWeight: "bold",
      color: "#263238",
      
    }
  }
      }} series={sortedValues} type="donut" width="450" />
    </div>
  );
};

export default Pestle;
