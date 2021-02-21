import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export const FormClient = () => {
  const clickButton = () => {
    alert("Funciona");
  };

  return (
    <>
      <h1>FormClient</h1>
      <Button variant="contained" color="primary" onClick={clickButton}>
        View Table
      </Button>
    </>
  );
};
