import { primaryNavLinks } from "../../models/NavGroups";
import LinkEl from "../ui/LinkEl";

export const SecondaryNav = () => {
  return (
    <nav>
      <ul className="flex align-middle justify-end">
        {primaryNavLinks.map((link) => {
          return (
            <li key={link.name}>
              <LinkEl
                className="font-normal text-xs p-1 text-green-500 hover:text-green-900 transition-colors"
                to={link.href}
                target={link.target}
                name={link.name}
              ></LinkEl>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
