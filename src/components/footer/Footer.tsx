import React from "react";

const date = new Date(Date.now());

export const Footer = () => {
  return (
    <footer className="py-8 shadow-">
      <div className="container mx-auto">
        <p>&copy; {date.getFullYear()} Coffee App</p>
      </div>
    </footer>
  );
};
