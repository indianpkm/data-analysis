import React, { useEffect, useState } from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import '../navbar/Navbar.css'
import FetchData from '../FetchData';

const Navbar = () => {
  const [value,setValue]=useState({
    intensity: '',
    likelihood: '',
    relevance: '',
    startYear: '',
    endYear: '',
    country: '',
    region: '',
    topic: '',
    sector: ''
  })
  const relevance=["1", "2", "3", "4", "5", "6", "7"]
  const likelihood=["1", "2", "3", "4"]
  let intensity=["1", "2", "3", "4", "6", "8", "9", "10", "12", "14", "15", "16", "18", "20", "24", "30", "32", "36", "40", "48", "60", "72", "96"]
  const startYear=["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2025", "2028", "2030", "2035", "2040", "2050"]
  const endYear=["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2024", "2025", "2026", "2027", "2028", "2030", "2034", "2035", "2036", "2040", "2041", "2046", "2050", "2051", "2055", "2060", "2126", "2200"]
  const country=["Algeria", "Angola", "Argentina", "Australia", "Austria", "Azerbaijan", "Belize", "Brazil", "Burkina Faso", "Canada", "China", "Colombia", "Cyprus", "Denmark", "Egypt", "Estonia", "Ethiopia", "Gabon", "Germany", "Ghana", "Greece", "Hungary", "India", "Indonesia", "Iran", "Iraq", "Japan", "Jordan", "Kazakhstan", "Kuwait", "Lebanon", "Liberia", "Libya", "Malaysia", "Mali", "Mexico", "Morocco", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Poland", "Qatar", "Russia", "Saudi Arabia", "South Africa", "South Sudan", "Spain", "Syria", "Turkey", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Venezuela"]
  const region=["Africa", "Asia", "Central Africa", "Central America", "Central Asia", "Eastern Africa", "Eastern Asia", "Eastern Europe", "Europe", "Northern Africa", "Northern America", "Northern Europe", "Oceania", "South America", "South-Eastern Asia", "Southern Africa", "Southern Asia", "Southern Europe", "Western Africa", "Western Asia", "Western Europe", "World", "world"]
  let sector=["Aerospace & defence", "Automotive", "Construction", "Energy", "Environment", "Financial services", "Food & agriculture", "Government", "Healthcare", "Information Technology", "Manufacturing", "Media & entertainment", "Retail", "Security", "Support services", "Tourism & hospitality", "Transport", "Water"]
const topic=["3D", "Washington", "administration", "agriculture", "aquaculture", "artificial intelligence", "asylum", "automaker", "bank", "battery", "biofuel", "brexit", "building", "business", "capital", "car", "carbon", "change", "city", "climate", "climate change", "clothing", "coal", "communication", "consumer", "consumption", "crisis", "data", "debt", "demand", "economic", "economic growth", "economy", "election", "electricity", "emission", "energy", "export", "factory", "farm", "finance", "food", "fossil fuel", "fracking", "gamification", "gas", "gasoline", "gdp", "government", "greenhouse gas", "growth", "ice", "industry", "inflation", "information", "infrastructure", "interest rate", "investment", "market", "material", "money", "nuclear", "oil", "peak oil", "plastic", "policy", "politics", "pollution", "population", "power", "production", "resource", "revenue", "risk", "robot", "security", "shale gas", "shortage", "software", "storm", "strategy", "tax", "technology", "tension", "terrorism", "tourist", "trade", "transport", "transportation", "unemployment", "vehicle", "war", "water", "wealth", "work", "worker", "workforce"]

const [filter, setFilter] = useState({});

useEffect(() => {
  // Update the filter whenever the value state object changes
  setFilter({
    intensity: value.intensity,
    likelihood: value.likelihood,
    relevance: value.relevance,
    startYear: value.startYear,
    endYear: value.endYear,
    country: value.country,
    region: value.region,
    topic: value.topic,
    sector: value.sector
  });
}, [value]);

  const handleChange=(option,dropdownName)=>{
    if(dropdownName==='intensity'||dropdownName==='likelihood'||dropdownName==='relevance'||dropdownName==='startYear'||dropdownName==='endYear'){
      const numericValue=Number(option.value)
      setValue((preValue)=>({
        ...preValue,
        [dropdownName]:numericValue
      }))
    }else{
    setValue((preValue)=>({
      ...preValue,
      [dropdownName]:option.value
    }))}
  }

  const options = [ ];
    const defaultOption = options[0];
    return (

        <div className='selector' >
        <Dropdown onChange={(option)=>handleChange(option,"intensity")} className='dropDown' options={intensity} value={defaultOption} placeholder="Intensity" />
        <Dropdown onChange={(option)=>handleChange(option,"likelihood")} className='dropDown' options={likelihood} value={defaultOption} placeholder="Likelihood" />
        <Dropdown onChange={(option)=>handleChange(option,"relevance")} className='dropDown' options={relevance} value={defaultOption} placeholder="Relevance" />
        <Dropdown onChange={(option)=>handleChange(option,"startYear")} className='dropDown' options={startYear} value={defaultOption} placeholder="Start Year" />
        <Dropdown onChange={(option)=>handleChange(option,"endYear")} className='dropDown' options={endYear} value={defaultOption} placeholder="End Year" />
        <Dropdown onChange={(option)=>handleChange(option,"country")} className='dropDown' options={country} value={defaultOption} placeholder="Country" />
        <Dropdown onChange={(option)=>handleChange(option,"region")} className='dropDown' options={region} value={defaultOption} placeholder="Select Region" />
        <Dropdown onChange={(option)=>handleChange(option,"topic")} className='dropDown' options={topic} value={defaultOption} placeholder="Select Topic" />
        <Dropdown onChange={(option)=>handleChange(option,"sector")} className='dropDown' options={sector} value={defaultOption} placeholder="Select Sector" />
        <FetchData filter={filter}/>
        </div>
    )
}

export default Navbar;