import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import '../mapChart/mapStyle.css'

const Topic = () => {
  
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
        let alltopic=[]
        for(let i=0;i<jsonData.length;i++){
            const topic=jsonData[i].topic;
            if(topic in alltopic){
                alltopic[topic]++
            }else{
                alltopic[topic]=1
            }
        }
        delete alltopic['']
        // console.log(alltopic)
        
            let topicObj = Object.entries(alltopic).map(([key, value]) => ({
                name: key,
                value: value,
              }));
            setOptions({
              title: {
                text: "Topic with number",
                align: "center",
              },
              series: [
                {
                  data: topicObj.map((item) => ({
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
      <div className="topic">
        <Chart
          options={options}
          series={options.series}
          type="treemap"
          height="380"
        />
        <div style={{width:'inherit'}}>Topic with number means how many times a topic appeared in the data</div>
      </div>
    );
  };
  
  export default Topic;
  