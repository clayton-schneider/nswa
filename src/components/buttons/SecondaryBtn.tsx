// Must be a react file so button can be used in other react files
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  to?: string;
  type?: "submit" | "reset" | "button";
  className?: string;
}
const SecondaryBtn = ({ children, to, className, type = "button" }: Props) => (
  <a
    type={type}
    href={to}
    className={
      className +
      " inline-block px-10 py-3 rounded-full text-lg text-white border border-white cursor-pointer"
    }
  >
    {children}
  </a>
);

export default SecondaryBtn;
