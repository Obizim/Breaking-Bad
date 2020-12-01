import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container } from "./DataStyles";
import Loader from "./../Loading";

function DataDetails() {
  const [item, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { char_id } = useParams();

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get(
          `https://breakingbadapi.com/api/characters/${char_id}`
        );
        const items = response.data;
        setData(items[0]);
        setLoading(false);
      } catch (err) {
        setLoading(true);
      }
    };

    loadData();
  });

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Container className="card">
          <img className="image" src={item.img} alt={item.name} />
          <div className="texts">
            <h2> {item.name}</h2>
            <p className="title">
              <span> Role: </span> {item.portrayed}
            </p>
            <p className="title">
              <span> BirthDay: </span> {item.birthday}
            </p>
            <p className="title">
              <span> NickName: </span>
              {item.nickname}
            </p>
            <p className="title">
              <span> Status: </span> {item.status}
            </p>
          </div>
        </Container>
      )}
    </div>
  );
}

export default DataDetails;
