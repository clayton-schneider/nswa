// Must be a react file so button can be used in other react files
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  to?: string;
  type?: "submit" | "reset" | "button";
  className?: string;
  // Customize to theme
  color?: "primary";
}
const PrimaryBtn = ({
  children,
  to,
  className,
  type = "button",
  color = "primary",
}: Props) => (
  <a
    type={type}
    href={to}
    className={
      className +
      ` bg-${color}` +
      " inline-block px-10 py-3 rounded-full text-lg text-white cursor-pointer"
    }
  >
    {children}
  </a>
);

export default PrimaryBtn;
