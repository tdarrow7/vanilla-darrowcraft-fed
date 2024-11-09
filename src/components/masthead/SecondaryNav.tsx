import { useEffect, useState } from "react";
import { NavGroups, PageModel, sitemap } from "../../models/NavGroups";
import { CartIcon } from "../cart/CartIcon";
import LinkEl from "../ui/LinkEl";
import { filterNavGroup } from "../../utils/page-filters";

export const SecondaryNav = () => {
  const [secondaryNavLinks, setSecondaryNavLinks] = useState<PageModel[]>([]);
  useEffect(() => {
    const links = filterNavGroup(sitemap, NavGroups.SEC);
    setSecondaryNavLinks(links);
  }, []);
  return (
    <div className="flex align-middle justify-end">
      <nav>
        <ul className="flex align-middle ">
          {secondaryNavLinks.map((link: PageModel) => {
            return (
              <li key={link.name}>
                <LinkEl
                  className="font-normal text-xs p-1 text-primary hover:text-secondary transition-colors"
                  to={link.href}
                  target={link.target ?? ""}
                  name={link.name}
                ></LinkEl>
              </li>
            );
          })}
        </ul>
      </nav>
      <CartIcon />
    </div>
  );
};
