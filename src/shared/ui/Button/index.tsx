import cn from "classnames";
import c from "./styles.module.css";
import { memo } from "react";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  fullWidth?: boolean;
}

const Button = ({ children, fullWidth, ...props }: IProps) => {
  return (
    <button className={cn(c.button, { [c.fullWidth]: fullWidth })} {...props}>
      {children}
    </button>
  );
};

export default memo(Button);
