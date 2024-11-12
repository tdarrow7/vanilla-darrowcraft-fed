import { NavGroups, PageModel } from "../models/NavGroups";

export const filterNavGroup = (sitemap: PageModel[], navGroup: NavGroups) => {
  const links = sitemap
    .filter((page) => page.navGroups?.includes(navGroup))
    .sort((a, b) => a.seq - b.seq);
  return links;
};
