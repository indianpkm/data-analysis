import { useDispatch } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { getData } from "../action/DataAction";

function FetchData(props) {
  const dispatch = useDispatch();
  const filter = props.filter;
  let val = Object.values(filter);
  let filterKeys = Object.keys(filter);
  console.log(filterKeys.length)

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:5000/getdata");

      let filteredData = data;
      filterKeys.forEach(key => {
        if (filter[key]) {
          filteredData = filteredData.filter(d => d[key] === (filter[key]));
        }
      });
      
      dispatch(getData(filteredData));
    };

    fetchData();
  }, [dispatch, filter, filterKeys]);

  return <></>;
}

export default FetchData;
