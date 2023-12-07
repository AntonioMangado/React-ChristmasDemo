import React from "react";
import { useState } from 'react';
import FormContact from "./FormContact";
import CardContact from "./CardContact";


const Contact = () => {

  const [data, setData] = useState({}); //Estado a compartir entre los hijos

  const addData = (message) => {
    const date = new Date().toDateString()
    const data = { message, date }
    setData(data);
  }

  const clearData = () => {
    setData({});
  }

  return (
  <div className="contactContainer">
    <FormContact add={addData} /> 
    <CardContact data={data} clear={clearData} /> 
  </div>
  );
};

export default Contact;
