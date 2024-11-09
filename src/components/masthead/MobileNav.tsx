"use client";

import React, { useState } from "react";
import { sitemap as mobileNavLinks } from "../../models/NavGroups";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export const MobileNav = () => {
  const [isActive, setisActive] = useState(false);

  function handleActiveState() {
    setisActive((prev) => !prev);
  }

  function handleCloseState() {
    setisActive((prev) => (prev = false));
  }
  return (
    <div className={`block md:hidden hamburger ${isActive ? "is-active" : ""}`}>
      <div className="hamburger-icon p-3 font-3xl block sm:hidden">
        <GiHamburgerMenu
          className=" text-primary"
          onClick={handleActiveState}
        />
      </div>
      <div
        className={` z-50 menu sm:hidden fixed top-0 left-0 w-screen h-screen bg-white transition-transform ${
          isActive ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative">
          <button
            onClick={handleActiveState}
            type="button"
            className="absolute top-3 right-4"
          >
            <IoMdClose className="text-3xl " />
          </button>
          <nav className="px-4 py-8">
            <ul>
              {mobileNavLinks.map((_link) => {
                return (
                  <li
                    className="border-b-2 last-of-type:border-none border-slate-500"
                    key={_link.name}
                  >
                    <Link
                      onClick={handleCloseState}
                      className="py-1 px-2 font-bold text-primary block"
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
      </div>
    </div>
  );
};
