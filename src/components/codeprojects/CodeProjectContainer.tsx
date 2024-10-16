import React, { useEffect, useState } from "react";
import { CodeProjectModel } from "./CodeProject";
import { CodeProjectList } from "./CodeProjectList";
import "../../api/codeprojects.json";

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
      const response = await fetch("https://api.timdarrow.com/codeprojects");

      const data = await response.json();
      return data;
    } catch (error) {
      console.warn("something seriously went wrong", error);
    }
  };

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <CodeProjectList codeProjectList={codeProjectList} />
      )}
    </>
  );
};
