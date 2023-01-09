// Must be a react file so button can be used in other react files
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  to?: string;
  target?: "_blank" | undefined;
  className?: string;
}
const PrimaryBtn = ({ children, to, target, className = "" }: Props) => (
  <a
    target={target}
    href={to}
    className={
      className +
      " inline-block px-10 py-3 bg-primary rounded-full text-lg text-white cursor-pointer"
    }
  >
    {children}
  </a>
);

export default PrimaryBtn;
