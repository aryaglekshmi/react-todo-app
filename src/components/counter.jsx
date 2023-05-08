import { React, useEffect } from "react";

function Counter(props) {
  useEffect(() => {
    console.log("mounting");
    return () => {
      console.log("unmounting");
    };
  }, []);

  const { title, count } = props; //destructuring
  return (
    <h1>
      Counter : {count} {title}
    </h1>
  );
}

export default Counter;
