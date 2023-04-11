import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import '../mapChart/mapStyle.css'


const Country = () => {
  
  const {jsonData}=useSelector((state)=>state.Data)
  const [options, setOptions] = useState({
    title: {
      text: "Country with number",
      align: "center",
    },
    series: [
      {
        data: []
      },
    ],
    legend: {
      show: false,
    },
    chart: {
      toolbar: {
        show: false,
      },
    },
  });

    useEffect(()=>{
            let allCountry=[]
            for(let i=0;i<jsonData.length;i++){
                const country=jsonData[i].country;
                if(country in allCountry){
                    allCountry[country]++
                }else{
                    allCountry[country]=1
                }
            }
            delete allCountry['']
        
            let countryObj = Object.entries(allCountry).map(([key, value]) => ({
                name: key,
                value: value,
              }));
            setOptions({
              title: {
                text: "Country with number",
                align: "center",
              },
              series: [
                {
                  data: countryObj.map((item) => ({
                    x: item.name,
                    y: item.value,
                  })),
                },
              ],
              legend: {
                show: false,
              },
              chart: {
                toolbar: {
                  show: false,
                },
              },
            })
    },[jsonData])

    return (
      <div className="country">
        <Chart
          options={options}
          series={options.series}
          type="treemap"
          height="350"
        />
        <div style={{width:'90%',alignSelf:'center'}}>Country with number means how many times a country appeared in the data</div>
      </div>
    );
  };
  
  export default Country;
  