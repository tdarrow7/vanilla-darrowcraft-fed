import { primaryNavLinks } from "../../models/NavGroups";
import { CartIcon } from "../cart/CartIcon";
import LinkEl from "../ui/LinkEl";

export const SecondaryNav = () => {
  return (
    <div className="flex align-middle justify-end">
      <nav>
        <ul className="flex align-middle ">
          {primaryNavLinks.map((link) => {
            return (
              <li key={link.name}>
                <LinkEl
                  className="font-normal text-xs p-1 text-primary hover:text-secondary transition-colors"
                  to={link.href}
                  target={link.target}
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
