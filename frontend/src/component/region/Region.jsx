import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import '../region/region.css'

const Region = () => {
  const {jsonData}=useSelector((state)=>state.Data)
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: []
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
    const year = jsonData[i].region;
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
        const year = jsonData[i].region;
        if(year in count){
          count[year]++
        }else{
          count[year]=1
        }
      }

      delete count['']
      // console.log(count)
      
    const sortedCount = Object.entries(count).sort((a, b) => a[1] - b[1]);
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
          categories: sortedKeys,
          title:{
            text:'Region',
            style:{
              fontSize:'1rem'
            }
          }
        },
        yaxis:{
          title:{
            text:'How many times came',
            style:{
              fontSize:'1rem'
            }
          }
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
    <div className="region">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="bar"
            width="700"
          />
        </div>
      </div>
    </div>
  );
}

export default Region;
