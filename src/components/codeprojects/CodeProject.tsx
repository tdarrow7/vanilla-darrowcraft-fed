import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineDescription } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { IoCodeSlashOutline } from "react-icons/io5";
import LinkEl from "../ui/LinkEl";

export interface CodeProjectModel {
  id: number;
  url: string;
  name: string;
  link: string;
  description: string;
  languages?: string;
  dateadded: string;
  github?: string;
  stacktype: string;
}

interface CodeProjectProps extends CodeProjectModel {
  index: number;
}

export const CodeProject = (props: CodeProjectProps) => {
  console.log(props);

  return (
    <div
      className={`w-full md:w-3/4 sm:w-4/5 p-4 ${
        props.index && props.index % 2 == 0
          ? "bg-green-100 rounded-r-2xl rounded-tl-2xl mr-auto"
          : "bg-green-300 rounded-l-2xl rounded-tr-2xl ml-auto"
      } ${props.index !== 0 ? "mt-4" : ""} `}
    >
      <strong className="text-md font-extrabold uppercase">{props.name}</strong>
      <div>
        <strong className="flex items-center">
          <MdOutlineDescription className="text-lg mr-1" />
          Description:
        </strong>
        <p className="not-prose">{props.description}</p>
      </div>
      <div className="mt-2 flex">
        <strong className="flex items-center">
          <IoCodeSlashOutline className="text-lg mr-1" />
          Languages:
        </strong>
        &nbsp;
        {props.languages}
      </div>
      <div className="mt-2 flex">
        <strong className="flex items-center">
          <IoIosLink className="text-lg mr-1" />
          Link:
        </strong>
        &nbsp;
        <LinkEl name={props.link} className="" target="" to={props.link} />
      </div>
      {props.github && (
        <div className="flex mt-2">
          <strong className="flex items-center">
            <FaGithub className="text-lg mr-1" />
            Github:
          </strong>
          &nbsp;
          <LinkEl
            name={props.github}
            className=""
            target=""
            to={props.github}
          />
        </div>
      )}
    </div>
  );
};
