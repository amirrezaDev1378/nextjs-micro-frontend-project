/* eslint-disable react-hooks/exhaustive-deps */

/**
 * please note that all the props are being passed to this component from the server side functions.
 */

import { Button } from "@mui/material";
import { useEffect } from "react";

const Main = (props) => {
  console.log(props);
  return (
    <div className="">
      sadsad
      <div className="">dssad</div>
      <Button variant="contained" color="primary">
        mame
      </Button>
    </div>
  );
};

export default Main;
