import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export const FormUsers = () => {
  const clickButton = () => {
    alert("Funciona");
  };

  return (
    <>
      <h1>FormUsers</h1>
      <Button variant="contained" color="primary" onClick={clickButton}>
        FormUsers
      </Button>
    </>
  );
};
