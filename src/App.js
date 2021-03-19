import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

function App() {
  const url = 'https://course-api.com/react-tours-project'
  const [data,setData] = useState([]);
  const [error,setError] = useState(null);
  const [isLoaded,setIsLoaded] = useState(null);

useEffect(()=>{
  fetch(url).then(resp=>resp.json()).then((result)=>{
    setIsLoaded(true);
    setData(result);
  },(error)=>{
    setIsLoaded(true);
    setError(error);
  });
},[])

function removeData(id)
{
 let newData=data.filter(e=>e.id!==id);
 setData(newData);
}

if(error)
{
  return <p>Error: {error.message}</p>
}
else if(!isLoaded)
{
  return <Loading/>
}
else
  return(
  <main>
  <Tours data={data} removeItem={removeData}/>
  </main>
)
}

export default App
