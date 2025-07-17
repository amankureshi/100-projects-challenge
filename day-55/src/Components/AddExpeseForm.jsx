import React, { useContext, useState } from "react";
import ExpneseContext from "../context/ExpneseContext";

const AddExpeseForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const { dispatch } = useContext(ExpneseContext);

  return <div></div>;
};

export default AddExpeseForm;
