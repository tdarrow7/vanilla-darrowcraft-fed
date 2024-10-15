import React from "react";
import { Link } from "react-router-dom";

type Props = {
  to: string;
  // className?: string;
  // target?: string;
  name: string;
  className: string;
  target?: string;
  props?: any[];
};

export interface Props1 {
  to: string;
  name: string;
  className: string;
  target: string;
  children?: any;
}

const LinkEl = ({ to, name, className, target }: Props1) => {
  return (
    <>
      {to.includes("http") ? (
        <a href={to} className={className || ""} target={target || ""}>
          {name}
        </a>
      ) : (
        <Link to={to} className={className || ""} target={target || ""}>
          {name}
        </Link>
      )}
    </>
  );
};

export default LinkEl;
