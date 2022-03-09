/* eslint-disable react-hooks/exhaustive-deps */

/**
 * please note that all the props are being passed to this component from the server side functions.
 */

import { useEffect , useState } from "react";

const Main = (props) => {
  const [apiMsg, setapiMsg] = useState({})
  useEffect(() => {
    fetch("/api/test").then((res) => {
      res.json().then((data) => {
        console.log(data);
        setapiMsg(data);
      });
    }).catch((err) => {
      console.error(err);
      alert("error using api!!!!");
    });
  }, [])
console.log(props);
  return (
    <div className="">
      Hello there 😎
      <p>
        simple page without using any additional libraries.
      </p>
      <h3>
        we also use api in the example !
      </h3>
      <p>this is from api/test:</p>
      <span>
      {apiMsg.length !== 0 ? <p>name : {apiMsg.name}  & message : {apiMsg.message}</p> : <p>Loading from api/test</p>}
      </span>
    </div>
  );
};


export default Main;
