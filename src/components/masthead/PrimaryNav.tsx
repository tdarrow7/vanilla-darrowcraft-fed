import React from "react";
import { primaryNavLinks } from "../../models/NavGroups";
import { Link } from "react-router-dom";

export const PrimaryNav = () => {
  return (
    <div>
      <nav>
        <ul className="flex justify-end items-center">
          {primaryNavLinks.map((link) => {
            return (
              <Link
                className="py-1 px-2 font-bold text-green-500 hover:text-green-900 transition-colors"
                key={link.name}
                to={link.href}
              >
                {link.name}
              </Link>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
