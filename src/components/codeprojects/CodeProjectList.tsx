import React from "react";
import { CodeProject, CodeProjectModel } from "./CodeProject";

interface Props {
  codeProjectList: CodeProjectModel[];
  children?: any;
}

export const CodeProjectList = ({ codeProjectList, children }: Props) => {
  const distinctStackTypes = codeProjectList.reduce<string[]>(
    (acc, project) => {
      if (!acc.includes(project.stacktype)) {
        acc.push(project.stacktype);
      }
      return acc;
    },
    []
  );

  const groupedProjectsByStack = distinctStackTypes.map((type) => {
    return codeProjectList.filter((project) => project.stacktype === type);
  });

  // console.log(codeProjectList);

  console.log(distinctStackTypes);
  console.log(groupedProjectsByStack);

  return (
    <>
      {groupedProjectsByStack.map((projectArray) => {
        return (
          <div key={projectArray[0].stacktype}>
            <h3>{projectArray[0].stacktype}</h3>
            {projectArray.map((project, index) => {
              return (
                <CodeProject
                  key={project.name}
                  {...project}
                  index={index + 1}
                />
              );
            })}
          </div>
        );
      })}
    </>
  );
};
