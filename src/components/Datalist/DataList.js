import React, { useState, useEffect } from "react";
import axios from "axios";
import { Wrapper } from "./DataStyles";
import {Link} from 'react-router-dom'

const Navl = {
    textDecoration: "none",
    outline: "none",
  };

function DataList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await axios.get(
      "https://breakingbadapi.com/api/characters"
    );
    const items = response.data;
    setItems(items);
  };
  return (
   <Wrapper className="characters">
      {items.map((character) => {
        return (
            <Link style={Navl} to={`/${character.char_id}`}><div key={character.char_id} className="characterList">
            <img src={character.img} alt={character.name} />
            <div className="texts">
            <h3>{character.name}</h3>
            <p>{character.portrayed}</p>
          </div>
          </div></Link>
        );
      })}
    </Wrapper>
  );
}

export default DataList;