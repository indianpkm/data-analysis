import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import '../intensity/intensityStyle.css'

const Intensity = () => {
  const {jsonData}=useSelector((state)=>state.Data)

  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [],
        title:{
          text:'Value Of',
          style:{
            fontSize:'1rem'
          }
        },
      },
      yaxis:{
        title:{
          text:'How many times came',
          style:{
            fontSize:'.9rem',
          }
        }
      }
    },
    series: [
      {
        name: "Intensity",
        data: []
      },
      {
        name: "Relevance",
        data: []
      },
      {
        name: "Likelihood",
        data: []
      }
    ]
  });

  useEffect(()=>{
    
     let inten={}
     let relv={}
     let likeli={}
     let lik=[]
      for(let i=0;i<jsonData.length;i++){
        const intensity=jsonData[i].intensity;
        const relevance=jsonData[i].relevance;
        const likelihood=jsonData[i].likelihood;
        lik.push(likelihood)
        if(intensity in inten){
            inten[intensity]++
        }else{
            inten[intensity]=1
        }
        if(relevance in relv){
          relv[relevance]++
        }else{
          relv[relevance]=1
        }
        if(likelihood in likeli){
          likeli[likelihood]++
        }else{
          likeli[likelihood]=1
        }
      }

      
    let allCountry=[]
    for(let i=0;i<jsonData.length;i++){
        const country=jsonData[i].country;
        if(country in allCountry){
            allCountry[country]++
        }else{
            allCountry[country]=1
        }
    }
    
    const sortedInten = Object.entries(inten).sort((a, b) => a[0] - b[0]);
    const sortedIntenJson = Object.fromEntries(sortedInten);
    delete sortedIntenJson['null']
    const intenKeys = Object.keys(sortedIntenJson);
    const intenValues = Object.values(sortedIntenJson);
    intenValues.splice(4,0,null)
    intenValues.splice(6,0,null)
    // console.log(sortedIntenJson)

    const sortedRele = Object.entries(relv).sort((a, b) => a[0] - b[0]);
    const sortedReleJson = Object.fromEntries(sortedRele);
    delete sortedReleJson['null']
    const relvKeys = Object.keys(sortedReleJson);
    const relvValues = Object.values(sortedReleJson);
    
    const sortedlikeli = Object.entries(likeli).sort((a, b) => a[0] - b[0]);
    const sortedlikeliJson = Object.fromEntries(sortedlikeli);
    delete sortedlikeliJson['null']
    const likeliKeys = Object.keys(sortedlikeliJson);
    const likeliValues = Object.values(sortedlikeliJson);

    setChartData({
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 15, 16, 18, 20, 24, 30, 32, 36, 40, 48, 60, 72, 96]
        }
      },
      series: [
        {
          name: "Intensity",
          data: intenValues
        },
        {
          name: "Relevance",
          data: relvValues
        },
        {
          name: "Likelihood",
          data: likeliValues
        }
      ]
    })
    
  },[jsonData])

  return (
    <div className="intensity">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="line"
            width="440"
          />
        </div>
      </div>
    </div>
  );
}

export default Intensity;
