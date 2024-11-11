import { LogoBox } from "./LogoBox";
import { MobileNav } from "./MobileNav";
import { PrimaryNav } from "./PrimaryNav";
import { SecondaryNav } from "./SecondaryNav";

export const Masthead = () => {
  return (
    <div className="hdr">
      <div className="main py-1 px-4 shadow-sm">
        <div className="flex justify-between items-center sm:items-end">
          <LogoBox />
          <div className="flex flex-col justify-between items-end">
            <div className="flex items-center">
              <MobileNav />
            </div>
            <div className="hidden sm:block">
              <SecondaryNav />
              <PrimaryNav />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
