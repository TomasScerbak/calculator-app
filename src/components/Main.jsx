import React from "react";

const Main = (props) => {
  return (
    <main>
      <section>{props.children}</section>
    </main>
  );
};

export default Main;
