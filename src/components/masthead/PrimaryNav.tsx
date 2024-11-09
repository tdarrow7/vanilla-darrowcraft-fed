import React, { useEffect, useState } from "react";
import { NavGroups, PageModel, sitemap } from "../../models/NavGroups";
import { Link } from "react-router-dom";
import { filterNavGroup } from "../../utils/page-filters";

export const PrimaryNav = () => {
  const [primaryNavLinks, setPrimaryNavLinks] = useState<PageModel[]>([]);
  useEffect(() => {
    const links: PageModel[] = filterNavGroup(sitemap, NavGroups.PRI);
    setPrimaryNavLinks(links);
  }, []);
  return (
    <div>
      <nav>
        <ul className="flex justify-end items-center">
          {primaryNavLinks.map((link: PageModel) => {
            return (
              <Link
                className="py-1 px-2 font-bold text-primary hover:text-secondary transition-colors"
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
