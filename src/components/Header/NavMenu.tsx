import { useState } from "react";
import Hamburger from "./Hamburger";
import PrimaryBtn from "@components/buttons/PrimaryBtn";
import SecondaryBtn from "@components/buttons/SecondaryBtn";

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
    <div className="xl:my-5 xl:py-5  xl:border-b xl:border-white xl:px-12 flex  justify-between">
      <ul
        className={
          "absolute top-[144px] z-50 flex w-full flex-col items-start gap-6 bg-white font-bebas py-5 px-4 text-xl transition-all duration-300 xl:static xl:w-auto xl:flex-row xl:items-center xl:bg-transparent xl:py-0 xl:px-0 " +
          (isOpen ? "left-0 z-40 !text-black" : "-left-full text-white")
        }
      >
        {links.map((link, idx) => (
          <li key={idx}>
            <a href={link.link}>{link.linkText}</a>
          </li>
        ))}
        <PrimaryBtn
          target="_blank"
          to="https://onvio.us/clientcenter"
          className="!block xl:!hidden w-full text-center lg:text-left lg:w-auto"
        >
          Client Portal
        </PrimaryBtn>
        <SecondaryBtn
          to="/pay-my-bill"
          className="!block border border-text-green text-text-green xl:!hidden w-full text-center lg:text-left lg:w-auto"
        >
          Pay My Bill
        </SecondaryBtn>
      </ul>
      <p className="hidden xl:block font-bold text-xl text-text-light">
        479-273-2539
      </p>
      <Hamburger clicked={handleClick} isOpen={isOpen} color="white" />
    </div>
  );
};
export default NavMenu;
