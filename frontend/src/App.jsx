import axios from 'axios';
import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState();
  // http://localhost:10000/data

  // http://localhost:10000/data/:id -> ni treba fetchData(id)
  const fetchData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}`);
      if(res.data) {
        setData(res.data);
      }

    } catch(err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <>
      <h1>Connecting via Vercel</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        {data && data.map(d => <span key={d.id}>{d.name}</span>)}
      </div>
    </>
  )
}

export default App
