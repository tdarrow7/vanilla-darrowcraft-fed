import { Link } from "react-router-dom";

type Props = {
  text: string;
  href?: string;
  newTab?: boolean;
  onclick?: () => void;
  disabled?: boolean;
};
const defaultClass = "py-4 px-10 bg-black uppercase text-white";

export const Button = ({
  text,
  href,
  newTab,
  onclick,
  disabled = false,
}: Props) => {
  return (
    <>
      {href ? (
        <Link
          to={href}
          target={`${newTab} ? _blank : ''`}
          rel={`${newTab} ? noopener noreferrer: ''`}
          className={`${defaultClass} ${
            disabled
              ? "disabled cursor-default opacity-75 "
              : "cursor-pointer hover:bg-stone-900"
          }`}
        ></Link>
      ) : onclick ? (
        <span
          className={`${defaultClass} ${
            disabled
              ? "disabled cursor-default opacity-75 "
              : "cursor-pointer hover:bg-stone-900"
          }`}
          onClick={onclick}
        >
          {text}
        </span>
      ) : (
        <span
          className={`${defaultClass} ${
            disabled
              ? "disabled cursor-default opacity-75 "
              : "cursor-pointer hover:bg-stone-900"
          }`}
        >
          {text}
        </span>
      )}
    </>
  );
};
