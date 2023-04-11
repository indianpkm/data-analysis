import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import '../endYear/endYear.css'

const EndYear = () => {
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
  
  useEffect(()=>{
    
     let count={}
      for(let i=0;i<jsonData.length;i++){
        const year = jsonData[i].end_year;
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

    setChartData({
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: sortedKeys,
          title:{
            text:'End Year',
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
    <div className="endYear">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="area"
            width="650"
          />
        </div>
      </div>
    </div>
  );
}

export default EndYear;
