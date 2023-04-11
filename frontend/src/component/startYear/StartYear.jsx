import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import '../startYear/startYear.css'

const StartYear = () => {
  const {jsonData}=useSelector((state)=>state.Data)
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [],
        title:{
          text:'Value of start_year'
        }
      },
      yaxis:{
        title:{
          text:'How many times came'
        }
      }
    },
    series: [
      {
        name: "series-1",
        data: []
      }
    ]
  });

  let count={}
  for(let i=0;i<jsonData.length;i++){
    const year = jsonData[i].impact;
    if(year in count){
      count[year]++
    }else{
      count[year]=1
    }
  }
  // console.log(count)

  useEffect(()=>{
    
     let count={}
      for(let i=0;i<jsonData.length;i++){
        const year = jsonData[i].start_year;
        if(year in count){
          count[year]++
        }else{
          count[year]=1
        }
      }
      
    const sortedCount = Object.entries(count).sort((a, b) => a[0] - b[0]);
    const sortedCountJson = Object.fromEntries(sortedCount);
    delete sortedCountJson['null']
    const sortedKeys = Object.keys(sortedCountJson);
    const sortedValues = Object.values(sortedCountJson);
    // console.log(sortedCountJson)

    setChartData({
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: sortedKeys
        }
      },
      series: [
        {
          name: "series-1",
          data: sortedValues
        }
      ]
    })

  },[jsonData])
  


  return (
    <div className="startYear">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="area"
            width="440"
          />
        </div>
      </div>
    </div>
  );
}

export default StartYear;
