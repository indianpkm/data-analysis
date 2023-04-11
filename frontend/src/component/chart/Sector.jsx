import React from 'react';
import Chart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import '../chart/sector.css'

const Sector = () => {
  const {jsonData}=useSelector((state)=>state.Data)

  let count={}
  for(let i=0;i<jsonData.length;i++){
    const sector = jsonData[i].sector;
    if(sector in count){
      count[sector]++
    }else{
      count[sector]=1
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


  return (
    <div className="sector">
      <Chart options={
        {
          labels:sortedKeys, title: {
            text: "Sector",
            offsetY: 20,
            offsetX:320,
            style: {
              fontSize: "25px",
              fontWeight: "bold",
              color: "#263238",
              
            }
        }
      }} series={sortedValues} type="donut" width="610" />
    </div>
  );
};

export default Sector;
