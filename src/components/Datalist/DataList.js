import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchData from "../SearchData";
import { Wrapper } from "./DataStyles";
import { Link } from "react-router-dom";
import Loader from "./../Loading";

function DataList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get(
          `https://www.breakingbadapi.com/api/characters?name=${query}`
        );
        const items = response.data;
        setItems(items);
        setLoading(false);
      } catch (err) {
        setLoading(true);
      }
    };
    loadData();
  }, [query]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <SearchData getQuery={(q) => setQuery(q)} />
          <Wrapper className="characters">
            {items.map((character) => {
              return (
                <div key={character.char_id} className="characterList">
                  <img src={character.img} alt={character.name} />
                  <div className="texts">
                    <h3>{character.name}</h3>
                    <p>{character.portrayed}</p>
                    <p className="details">
                      <Link to={`/${character.char_id}`}>View More</Link>
                    </p>
                  </div>
                </div>
              );
            })}
          </Wrapper>
        </div>
      )}
    </div>
  );
}

export default DataList;
