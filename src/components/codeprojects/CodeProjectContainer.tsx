import React from "react";

const stackTypes = ["Frontend", "Backend", "Full-Stack"];

export const CodeProjectContainer = () => {
  return (
    <>
      <h2>Stuff</h2>
      {stackTypes.map((type) => {
        return <p key={type}>{type}</p>;
      })}
    </>
  );
};
