import { type } from "os";
import style from "./css/formButtons.module.css";
interface Props {
  type?: "button" | "submit" | "reset";
  text?: string;
  onClick?: (e: any) => void;
  color: string;
  children?: React.ReactNode;
  styles?: string;
}

export default function FormButton(props: Props) {
  return (
    <>
      <button
        onClick={props.onClick}
        className={`mt-5 ${
          !props.styles ? "w-64 h-14" : props.styles
        } rounded-xl ${props.color === "claro" ? style.claro : style.oscuro} `}
        type={props.type}
      >
        {props.text}
        {props.children}
      </button>
    </>
  );
}
