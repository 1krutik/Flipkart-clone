import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BuyPage = () => {
  const { category, id } = useParams();
  const [state, setState] = useState("");


  const abc = async () => {
    const xyz = await axios.get(`http://localhost:3000/${category}`);
    const pi = parseInt(id);
    const product = xyz.data.find((item) => {
      let itemid = parseInt(item.id);
      return itemid === pi;
    });
    setState(product);
  };
  useEffect(() => {
    abc()
    // eslint-disable-next-line
  }, [category, id]);



  return (
    <>
      {state.map((item) => {
        return (
          <>
            <img src={item.img} alt="" />
          </>
        );
      })}
    </>
  );
};

export default BuyPage;
