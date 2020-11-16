import React, { useState, useEffect } from "react";
import axios from "axios";

function DataList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await axios.get(
      "https://breakingbadapi.com/api/characters"
    );
    const data = response.data;
    setData(data);
    console.log(data)
  };
  return <div>{data.map((character, id) => {
     return <div key={id}>
         <img src={character.img} alt={character.name}/>
         <h2>{character.name}</h2>
         <p>{character.portrayed}</p>
         <p>{character.nickname}</p>
     </div>
  })}</div>;
}

export default DataList;
