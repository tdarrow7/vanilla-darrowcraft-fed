import React, { useEffect, useState } from "react";
import { CodeProjectModel } from "./CodeProject";
import { CodeProjectList } from "./CodeProjectList";
import "../../api/codeprojects.json";

const stackTypes = ["Frontend", "Backend", "Full-Stack"];

export const CodeProjectContainer = () => {
  const [loading, setIsLoading] = useState(true);
  const [codeProjectList, setcodeProjectList] = useState<CodeProjectModel[]>(
    []
  );
  useEffect(() => {
    const setDataAndSetState = async () => {
      const data = await fetchData();

      setcodeProjectList(data);
      setIsLoading(false);
    };

    setDataAndSetState();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3030/codeprojects");

      const data = await response.json();
      return data;
    } catch (error) {
      console.warn("something seriously went wrong", error);
    }
  };

  return (
    <>
      <h2>Stuff</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <CodeProjectList codeProjectList={codeProjectList} />
      )}
      {/* {stackTypes.map((type) => {
        return <p key={type}>{type}</p>;
      })} */}
    </>
  );
};
