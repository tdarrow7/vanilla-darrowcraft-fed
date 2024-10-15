"use client";

import React, { useState } from "react";
import { primaryNavLinks, secondaryNavLinks } from "../../models/NavGroups";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export const MobileNav = () => {
  const [isActive, setisActive] = useState(false);
  const mobileNavLinks = secondaryNavLinks.concat(primaryNavLinks);

  function handleActiveState(event: any) {
    setisActive((prev) => !prev);
  }

  function handleCloseState(event: any) {
    setisActive((prev) => (prev = false));
  }
  return (
    <div className={`hamburger ${isActive ? "is-active" : ""}`}>
      <div className="hamburger-icon p-3 font-3xl block sm:hidden">
        <GiHamburgerMenu
          className=" text-green-500"
          onClick={handleActiveState}
        />
      </div>
      <nav
        className={`z-50 menu px-4 py-4 pt-6 sm:hidden  p-3 fixed top-0 left-0 w-screen h-screen bg-white transition-transform ${
          isActive ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <IoMdClose
          className="text-3xl absolute top-1 right-1"
          onClick={handleActiveState}
        />
        <ul>
          {mobileNavLinks.map((_link) => {
            return (
              <li
                className="border-b-2 last-of-type:border-none border-slate-500"
                key={_link.name}
              >
                <Link
                  onClick={handleCloseState}
                  className="py-1 px-2 font-bold text-green-500 block"
                  to={_link.href}
                >
                  {_link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
