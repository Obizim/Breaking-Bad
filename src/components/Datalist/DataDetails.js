import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container } from "./DataStyles";

function DataDetails() {
  const [item, setData] = useState([]);
  const { char_id } = useParams();

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(
        `https://breakingbadapi.com/api/characters/${char_id}`
      );
      const items = response.data;
      setData(items[0]);
    };

    loadData();
  });

  return (
    <Container className="card">
      <img className="image" src={item.img} alt={item.name} />
      <div style={{ marginTop: "1rem", alignSelf: "center" }}>
        <h2>{item.name}</h2>
        <p className="title">
          who played the role of {item.portrayed}. Popularly known as{" "}
          {item.nickname}
        </p>
      </div>
      <p className="title">Was {item.status} by the end of the series</p>
    </Container>
  );
}

export default DataDetails;
