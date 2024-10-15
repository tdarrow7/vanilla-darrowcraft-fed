import React from "react";
import { Outlet } from "react-router-dom";
import { CodeProjectContainer } from "../components/codeprojects/CodeProjectContainer";

export const Home = () => {
  const hd = false;
  return (
    <section className="mx">
      <article className="prose prose-headings:font-bold prose-h1:text-5xl prose-h2:text-4xl max-w-none">
        <h1 className="">DarrowCraft&apos;s Premium Coffee</h1>
        <p className="">Welcome to the homepage! </p>

        {hd ? (
          ""
        ) : (
          <div className="bg-transparent">
            <p>The goal of this site is to showcase the following:</p>
            <ol>
              <li>Experience with building frontend frameworks</li>
              <li>Experience developing backend tools to enhance workflow</li>
              <li>Experience developing leadership</li>
            </ol>
          </div>
        )}
        <div className="bg-red-200 my-4 p-8 max-w-3xl mx-auto rounded-2xl">
          <strong className="uppercase text-3xl text-center block">
            Word of Caution
          </strong>
          <p className="">
            This site is constantly evolving as new frontend and backend
            technologies are explored or implemented. Visit often to see what
            items have changed.
          </p>
        </div>
        {hd ? (
          ""
        ) : (
          <div>
            <h2>Current Projects</h2>
            <CodeProjectContainer></CodeProjectContainer>
          </div>
        )}
      </article>
      <Outlet />
    </section>
  );
};
