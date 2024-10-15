import React from "react";

export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode;
  size?: string | number;
  color?: string;
  title?: string;
}

interface LogoProps {
  width?: number;
  height?: number;
  color?: string;
  title?: string;
}

//  type LogoProps = {
//     width: 1000
//     height: 1000
//     color: 'initial'
//     title: ''
//  }

const defaultProps: Required<
  Pick<LogoProps, "width" | "height" | "color" | "title">
> = {
  width: 1200,
  height: 1200,
  color: "initial",
  title: "",
};

const Logo = ({
  width = defaultProps.width,
  height = defaultProps.height,
  color = defaultProps.color,
  title = defaultProps.title,
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      version="1.1"
      viewBox={`0 0 1200 1200`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g>
        <path d="m865.5 1125h-562.5c-5.8125 0-11.438-2.8125-15-7.5s-4.6875-10.875-3-16.5l21-72c2.8125-9.9375 13.312-15.562 23.25-12.75s15.562 13.312 12.75 23.25l-14.062 48h512.44l-97.312-333.19h-317.81l-71.25 243.94c-2.8125 9.9375-13.312 15.75-23.25 12.75-9.9375-2.8125-15.562-13.312-12.75-23.25l75.188-257.44c2.25-8.0625 9.75-13.5 18-13.5h346.13c8.25 0 15.75 5.4375 18 13.5l108.19 370.69c1.6875 5.625 0.5625 11.812-3 16.5s-9 7.5-15 7.5z" />
        <path d="m641.81 225h-115.31c-8.0625 0-15.375-5.25-17.812-12.938l-31.125-96.938c-3-9.375-1.3125-19.5 4.5-27.375s15-12.562 24.75-12.562h154.87c9.75 0 18.938 4.6875 24.75 12.562s7.5 18.188 4.5 27.375l-31.125 96.938c-2.4375 7.6875-9.75 12.938-17.812 12.938zm-101.62-37.5h87.938l24-75h-136.13l24 75z" />
        <path d="m653.44 754.31h-138.37c-9.75 0-17.812-7.3125-18.75-17.062l-43.312-454.31c-0.5625-5.25 1.3125-10.5 4.875-14.438s8.625-6.1875 13.875-6.1875h225c5.25 0 10.312 2.25 13.875 6.1875s5.25 9.1875 4.875 14.438l-43.312 454.31c-0.9375 9.5625-9 17.062-18.75 17.062zm-121.5-37.5h104.44l39.75-416.81h-183.74l39.75 416.81z" />
        <path d="m777.74 300h-387c-6.375 0-12.375-3.375-15.75-8.625-3.375-5.4375-3.9375-12.188-1.125-18 24.938-52.875 76.875-85.688 135.37-85.688h150c40.125 0 77.812 15.562 106.12 43.875 12.375 12.375 22.125 26.438 29.438 41.812 2.625 5.8125 2.25 12.562-1.125 18s-9.375 8.625-15.75 8.625zm-352.5-37.5h317.81c-1.3125-1.5-2.8125-3-4.3125-4.5-21.188-21.188-49.5-33-79.5-33h-150c-33 0-63 13.875-84 37.5z" />
        <path d="m369 577.31c-6.375 0-12.562-3.375-16.125-9.1875-58.312-97.125-122.06-197.63-194.81-274.13-5.25-5.4375-6.5625-13.5-3.5625-20.25 3-6.9375 9.75-11.438 17.25-11.438h131.26c8.625 0 16.312 6 18.188 14.438l66 277.31c2.0625 9-2.625 18.188-11.25 21.75-2.25 0.9375-4.6875 1.3125-7.125 1.3125zm-155.06-277.31c39.188 45.75 75.75 97.125 110.06 150.19l-35.812-150.19z" />
        <path d="m757.31 754.31h-346.13c-8.625 0-16.312-6-18.188-14.438l-108.19-454.31c-1.3125-5.625 0-11.438 3.5625-15.938s9-7.125 14.625-7.125h650.06c27.562 0 53.438 11.625 71.25 31.688 18 20.438 26.062 47.438 21.75 73.875l-32.062 202.69c-5.0625 31.125-34.125 52.688-65.438 47.812-15.375-2.25-28.688-10.312-37.875-22.875-9.1875-12.375-12.75-27.75-10.5-43.125l16.875-106.5c1.6875-10.125 11.25-17.25 21.562-15.562s17.25 11.25 15.562 21.562l-16.875 106.5c-0.75 5.25 0.375 10.688 3.5625 15s7.875 7.125 13.312 7.875c10.875 1.6875 21-5.8125 22.688-16.688l32.062-202.69c2.4375-15.375-2.25-31.125-12.75-43.125-10.688-12-26.438-18.938-43.125-18.938h-626.26l99.188 416.81h316.5l87-364.87c2.0625-8.4375 9.5625-14.438 18.188-14.438h102.75c5.4375 0 10.688 2.4375 14.25 6.5625s5.0625 9.75 4.3125 15.188l-7.875 48.938c-1.6875 10.312-11.25 17.25-21.562 15.562s-17.25-11.25-15.562-21.562l4.3125-27.375h-66l-87 364.87c-2.0625 8.4375-9.5625 14.438-18.188 14.438z" />
      </g>
    </svg>
  );
};

export default Logo;
