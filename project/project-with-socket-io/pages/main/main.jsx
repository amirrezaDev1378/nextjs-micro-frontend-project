/* eslint-disable react-hooks/exhaustive-deps */

/**
 * please note that all the props are being passed to this component from the server side functions.
 */

import { useEffect, useState } from "react";
import io from "socket.io-client";

const Main = (props) => {
  console.log(props);
  const [socketMsg, setsocketMsg] = useState({
    status: "",
    message: "",
  });
  useEffect(() => {
    fetch("/api/socket").finally(() => {
      const socket = io();

      socket.on("connect", () => {
        console.log("connect");
        setsocketMsg((currentState) => ({
          ...currentState,
          status: "connected",
        }));
        socket.emit("hello");
      });

      socket.on("hello", (data) => {
        setsocketMsg((currentState) => ({
          ...currentState,
          message: data,
        }));
        console.log("hello", data);
      });

      socket.on("a user connected", () => {
        alert("a user is connected");
        console.log("a user connected");
      });

      socket.on("disconnect", () => {
        setsocketMsg((currentState) => ({
          ...currentState,
          status: "disconnect",
        }));
        console.log("disconnect");
      });
    });
  }, []);
  return (
    <div className="">
      {socketMsg.status.length !== 0 && (
        <div className="">
          <h1>socket status is : {socketMsg.status}</h1>

          <h3>socket message is : {socketMsg.message}</h3>
        </div>
      )}
    </div>
  );
};

export default Main;
