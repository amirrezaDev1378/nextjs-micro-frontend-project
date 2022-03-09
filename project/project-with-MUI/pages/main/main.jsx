/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */

/**
 * please note that all the props are being passed to this component from the server side functions.
 */

import { Button } from "@mui/material";
import { useEffect } from "react";
import TextField from "@mui/material/TextField";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AddReactionIcon from '@mui/icons-material/AddReaction';

const Main = (props) => {
  
  return (
    <div className="">
      <h1>This page is created using material ui !</h1>
      <p>Some MUI components :</p>

      <Button variant="contained" color="primary">
        Hello👍
      </Button>
      <br />
      <br />
      <br />
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        placeholder="type here"
      />
      <br />
      <br />
      <br />
      <h2>
        MUI icons :
        <AcUnitIcon />
        <AddLocationAltIcon />
        <AddReactionIcon />
      </h2>

      <h3>
        server side code :
      </h3>
      <p>
        {props.msg}
      </p>
    </div>
  );
};

export default Main;
