import React, { useState, useEffect } from "react";
import axios from "axios";
import { Wrapper } from "./DataStyles";

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
    console.log(data);
  };
  return (
    <Wrapper className="characters">
      {data.map((character, id) => {
        return (
          <div className="characterList" key={id}>
            <img src={character.img} alt={character.name} />
            <div className="texts">
            <h4>{character.name}</h4>
            <p>{character.portrayed}</p>
            <p>{character.nickname}</p>
          </div>
          </div>
        );
      })}
    </Wrapper>
  );
}

export default DataList;

{/* <div class="articles">

<div class="articles__list">
    <img src="images/image-currency.jpg" alt="currency">
    <div class="texts">
      <h6>By Claire Robinson</h6> 
      <p class="big">Receive money in any currency with no fees</p>
      <p class="small">The world is getting smaller and we’re becoming more mobile. So why should you be 
        forced to only receive money in a single …</p> 
    </div>
  </div> */}