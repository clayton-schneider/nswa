// Must be a react file so button can be used in other react files
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  to?: string;
  className?: string;
}
const SecondaryBtn = ({ children, to, className }: Props) => (
  <a
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
