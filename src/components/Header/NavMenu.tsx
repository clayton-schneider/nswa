import { useState } from "react";
import Hamburger from "./Hamburger";
import PrimaryBtn from "@components/buttons/PrimaryBtn";

interface Props {
  links: {
    link: string;
    linkText: string;
    sublinks?: {
      link: string;
      linkText: string;
    }[];
  }[];
}

const NavMenu = ({ links }: Props) => {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="my-5 py-5  border-b border-white px-12 flex justify-between">
      <ul
        className={
          "absolute top-[144px] z-50 flex w-full flex-col items-start gap-6 bg-white font-bebas py-5 px-4 text-xl transition-all duration-300 xl:static xl:w-auto xl:flex-row xl:items-center xl:bg-transparent xl:py-0 xl:px-0 " +
          (isOpen
            ? "left-0 z-40 !text-black shadow shadow-neutral-300"
            : "-left-full text-white")
        }
      >
        {links.map((link, idx) => (
          <li key={idx}>
            <a href={link.link}>{link.linkText}</a>
          </li>
        ))}
        {/* <PrimaryBtn
          to="/request-a-quote"
          className="!block w-full text-center lg:text-left lg:w-auto"
        >
          Join Us
        </PrimaryBtn> */}
      </ul>
      <p className="font-bold text-xl text-text-light">479-273-2539</p>
      <Hamburger clicked={handleClick} isOpen={isOpen} color="white" />
    </div>
  );
};
export default NavMenu;
